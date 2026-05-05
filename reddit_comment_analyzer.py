from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
import re
from typing import Iterable

import requests

DEFAULT_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) reddit-comment-analyzer"


@dataclass
class WeeklyStats:
    username: str
    keyword: str
    week: int
    window_label: str
    total_comments: int
    total_upvotes: int
    deleted_comments: int
    removed_comments: int
    keyword_mentions: int
    keyword_upvotes: int
    pages_fetched: int
    keyword_comment_links: list[str]


class RedditCommentAnalyzer:
    def __init__(self, username: str, user_agent: str = DEFAULT_USER_AGENT, timeout: int = 20) -> None:
        self.username = username
        self.base_url = f"https://old.reddit.com/user/{username}/comments.json"
        self.headers = {"User-Agent": user_agent}
        self.timeout = timeout

    @staticmethod
    def get_week_window_ist(week: int) -> tuple[datetime, datetime, float, float, str]:
        ist = timezone(timedelta(hours=5, minutes=30))
        now_ist = datetime.now(ist)

        # Weekly window starts every Sunday at 06:00 IST.
        days_since_sunday = (now_ist.weekday() + 1) % 7
        last_sunday_6_ist = (now_ist - timedelta(days=days_since_sunday)).replace(
            hour=6,
            minute=0,
            second=0,
            microsecond=0,
        )

        if now_ist < last_sunday_6_ist:
            last_sunday_6_ist -= timedelta(days=7)

        last_sunday_6_ist -= timedelta(weeks=week)
        next_sunday_6_ist = last_sunday_6_ist + timedelta(weeks=1)

        last_sunday_6_ts = last_sunday_6_ist.timestamp()
        next_sunday_6_ts = next_sunday_6_ist.timestamp()

        window_label = (
            f"from {last_sunday_6_ist.strftime('%Y-%m-%d %H:%M')} "
            f"to {next_sunday_6_ist.strftime('%Y-%m-%d %H:%M')} IST"
        )

        return last_sunday_6_ist, next_sunday_6_ist, last_sunday_6_ts, next_sunday_6_ts, window_label

    def _fetch_page(self, after: str | None = None) -> dict:
        params = {"limit": 100}
        if after:
            params["after"] = after

        response = requests.get(self.base_url, headers=self.headers, params=params, timeout=self.timeout)

        if response.status_code != 200:
            raise RuntimeError(
                f"Reddit request failed with status {response.status_code}. "
                f"Response snippet: {response.text[:500]}"
            )

        try:
            return response.json()
        except Exception as exc:
            raise RuntimeError(f"Reddit returned non-JSON response: {response.text[:500]}") from exc

    @staticmethod
    def _is_deleted_comment(comment_body: str, author: str | None = None) -> bool:
        body = (comment_body or "").strip().lower()
        author_name = (author or "").strip().lower()

        return body == "[deleted]" or author_name == "[deleted]"

    @staticmethod
    def _is_removed_comment(comment_body: str) -> bool:
        body = (comment_body or "").strip().lower()
        if not body:
            return False

        # Match common Reddit removal variants: '[removed]', 'removed',
        # 'this comment has been removed.' and small variants.
        return bool(re.match(r"^(?:\[?removed\]?|this comment has been removed\.?|comment removed)$", body))

    def get_keyword_comment_links(
        self,
        keywords: str | Iterable[str],
        since_ts: float | None = None,
        until_ts: float | None = None,
    ) -> list[str]:
        if isinstance(keywords, str):
            keywords = [keywords]

        keyword_list = [k.lower() for k in keywords if k]
        if not keyword_list:
            return []

        links: list[str] = []
        seen_links: set[str] = set()
        after: str | None = None

        while True:
            data = self._fetch_page(after=after)
            children = data.get("data", {}).get("children", [])
            if not children:
                break

            reached_older_comments = False

            for post in children:
                comment_data = post.get("data", {})
                comment_body = comment_data.get("body", "")
                created = comment_data.get("created_utc", 0)

                if since_ts is not None and created < since_ts:
                    reached_older_comments = True
                    break

                if until_ts is not None and created >= until_ts:
                    continue

                if any(k in comment_body.lower() for k in keyword_list):
                    permalink = comment_data.get("permalink", "")
                    if permalink:
                        comment_url = f"https://www.reddit.com{permalink}"
                        if comment_url not in seen_links:
                            seen_links.add(comment_url)
                            links.append(comment_url)

            if reached_older_comments:
                break

            after = data.get("data", {}).get("after")
            if not after:
                break

        return links

    def get_weekly_stats(self, keyword: str, week: int = 0) -> WeeklyStats:
        _, _, since_ts, until_ts, window_label = self.get_week_window_ist(week)

        total_comments = 0
        total_upvotes = 0
        deleted_comments = 0
        removed_comments = 0
        keyword_mentions = 0
        keyword_upvotes = 0
        pages_fetched = 0

        after: str | None = None
        while True:
            data = self._fetch_page(after=after)
            children = data.get("data", {}).get("children", [])
            if not children:
                break

            pages_fetched += 1
            reached_older_comments = False

            for post in children:
                comment_data = post.get("data", {})
                comment = comment_data.get("body", "")
                author = comment_data.get("author")
                score = comment_data.get("score", 0)
                created = comment_data.get("created_utc", 0)

                if created < since_ts:
                    reached_older_comments = True
                    break

                if created < until_ts:
                    total_comments += 1
                    total_upvotes += score

                    if self._is_deleted_comment(comment, author):
                        deleted_comments += 1
                        continue

                    if self._is_removed_comment(comment):
                        removed_comments += 1
                        continue

                    if keyword and re.search(rf"(?i)(?<!\w){re.escape(keyword)}(?!\w)", comment):
                        keyword_mentions += 1
                        keyword_upvotes += score

            if reached_older_comments:
                break

            after = data.get("data", {}).get("after")
            if not after:
                break

        keyword_comment_links = self.get_keyword_comment_links(
            keywords=keyword,
            since_ts=since_ts,
            until_ts=until_ts,
        )

        return WeeklyStats(
            username=self.username,
            keyword=keyword,
            week=week,
            window_label=window_label,
            total_comments=total_comments,
            total_upvotes=total_upvotes,
            deleted_comments=deleted_comments,
            removed_comments=removed_comments,
            keyword_mentions=keyword_mentions,
            keyword_upvotes=keyword_upvotes,
            pages_fetched=pages_fetched,
            keyword_comment_links=keyword_comment_links,
        )


def save_links(links: list[str], output_file: str) -> None:
    with open(output_file, "w", encoding="utf-8") as file:
        if links:
            file.write("\n".join(links) + "\n")
        else:
            file.write("No keyword comment links found.\n")
