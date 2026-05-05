# Reddit Weekly Comment Analyzer

This app analyzes a Reddit user's comments for a selected IST weekly window:

- total comments
- total upvotes
- deleted comments
- removed comments
- keyword mention count
- keyword matching comment upvotes
- direct links to matching comments

## Setup

```powershell
pip install -r requirements.txt
```

## Run

```powershell
python app.py Pitiful_Permit9585
```

The default behavior is:

- current week (`--week 0`)
- keyword `runable`

You can still override them:

```powershell
python app.py Pitiful_Permit9585 --keyword runable --week 0
```

## Options

- `username` (or `--username`): Reddit username
- `--keyword` (optional, default `runable`): keyword to search in comments
- `--week` (optional): `0` this week, `1` last week, `2` two weeks ago, etc.
- `--target-comments` (optional, default `160`): used for `Need to comment more` output
- `--output` (optional, default `keyword_comment_links.txt`): output text file for keyword links

## Notes

- Uses `https://old.reddit.com/user/<username>/comments.json`
- Uses a custom User-Agent to reduce request blocking
- Weekly window is Sunday 06:00 IST to next Sunday 06:00 IST
