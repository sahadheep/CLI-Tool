import argparse

from reddit_comment_analyzer import RedditCommentAnalyzer, save_links


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Analyze a Reddit user's weekly comments and keyword usage."
    )
    parser.add_argument("username", nargs="?", help="Reddit username")
    parser.add_argument("--username", dest="username_opt", help="Reddit username")
    parser.add_argument(
        "--keyword",
        default="runable",
        help="Keyword to search in comment bodies (default: runable)",
    )
    parser.add_argument(
        "--week",
        type=int,
        default=0,
        help="Week offset: 0=this week, 1=last week, 2=two weeks ago",
    )
    parser.add_argument(
        "--target-comments",
        type=int,
        default=160,
        help="Comment target used to show remaining comments needed",
    )
    parser.add_argument(
        "--output",
        default="keyword_comment_links.txt",
        help="Output file path for keyword comment links",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    username = args.username_opt or args.username

    if not username:
        raise SystemExit("Please provide a username, for example: python app.py Pitiful_Permit9585")

    analyzer = RedditCommentAnalyzer(username=username)
    stats = analyzer.get_weekly_stats(keyword=args.keyword, week=args.week)

    print(f"Comments {stats.window_label}:", stats.total_comments)
    print(f"Upvotes {stats.window_label}:", stats.total_upvotes)
    print(f"Deleted comments {stats.window_label}:", stats.deleted_comments)
    print(f"Removed comments {stats.window_label}:", stats.removed_comments)
    print(f"Need to comment more: {args.target_comments - stats.total_comments}")

    print("\nKeyword:", stats.keyword)
    print(f"Keyword mentions {stats.window_label}:", stats.keyword_mentions)
    print(f"Upvotes on keyword comments {stats.window_label}:", stats.keyword_upvotes)
    print("Pages fetched:", stats.pages_fetched)

    save_links(stats.keyword_comment_links, args.output)
    print(f"\nKeyword comment links saved to {args.output}")


if __name__ == "__main__":
    main()
