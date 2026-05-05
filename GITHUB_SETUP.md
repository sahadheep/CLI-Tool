# GitHub Setup Guide

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `cil-ai-agent` (or any name you prefer)
   - **Description**: "CLI AI Agent that clones websites by generating HTML, CSS, and JavaScript"
   - **Visibility**: **Public** (required for assignment submission)
   - **Initialize with**: Do NOT check anything (we already have files)

3. Click "Create repository"

## Step 2: Configure Git with Your GitHub Account

First time setup (do this once):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Add Remote and Push

In your project directory:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/cil-ai-agent.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Verify on GitHub

1. Go to your repository URL: `https://github.com/YOUR_USERNAME/cil-ai-agent`
2. You should see all your files listed
3. The README.md should display on the page

## Troubleshooting

### Authentication Error

If you get an authentication error, use Personal Access Token:

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `workflow`
4. Copy the token
5. When prompted for password, paste the token instead

### Remote Already Exists

```bash
# Remove existing remote
git remote remove origin

# Add the correct one
git remote add origin https://github.com/YOUR_USERNAME/cil-ai-agent.git
```

### Push Failed

```bash
# Pull first if there are conflicts
git pull origin main

# Then push
git push -u origin main
```

## Project Structure for GitHub

Your repository should contain:

```
cil-ai-agent/
├── .gitignore                  # Files to ignore
├── .env.example                # Environment template
├── .github/                    # GitHub workflows (optional)
├── package.json                # Node.js dependencies
├── package-lock.json           # Locked dependencies
├── README.md                   # Main documentation
├── QUICKSTART.md               # Quick start guide
├── YOUTUBE_DEMO_SCRIPT.md      # Demo recording script
├── index.js                    # Main interactive agent
├── demo.js                     # Demo mode script
├── generate-website.js         # Quick generation script
├── tools/
│   ├── fileGenerator.js        # File system operations
│   └── executor.js             # Command execution
├── templates/
│   └── scaler.js              # Website template
└── scaler_website/            # Example output (auto-generated)
    ├── index.html
    ├── styles.css
    └── script.js
```

## Keeping Repository Updated

After initial push, to update your code:

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

## Getting Your Repository URL

After pushing, your repository URL will be:

```
https://github.com/YOUR_USERNAME/cil-ai-agent
```

Use this URL for assignment submission.

## Tips

- Make regular commits with descriptive messages
- Keep the README updated
- Add badges (optional): Build status, Node version, License
- Consider adding topics: `ai`, `agent`, `website-cloner`, `nodejs`

## Next Steps

1. ✅ Create repository on GitHub
2. ✅ Push local code
3. ✅ Verify files appear on GitHub
4. 📹 Record YouTube demo (next step)
5. 📝 Submit links to course portal
