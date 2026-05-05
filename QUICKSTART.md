# Quick Start Guide

## Installation

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory (or copy from `.env.example`)
2. Add your OpenAI API key:

```
OPENAI_API_KEY=sk-your-key-here
```

Get your API key from: https://platform.openai.com/api-keys

## Running the Agent

### Interactive Mode (Chat with the agent)

```bash
npm start
```

Then type your instructions in the terminal, e.g.:

```
> Clone the Scaler Academy website and save it in a folder named "my_scaler_clone"
```

### Demo Mode (Pre-configured example)

```bash
npm run demo
```

This will run the agent with a pre-set task to clone the Scaler website.

### Quick Generation (Without AI)

```bash
npm run generate
```

This instantly generates the Scaler website without using OpenAI API.

## Project Structure

```
├── index.js                    # Main interactive agent
├── demo.js                     # Demo mode with pre-configured task
├── generate-website.js         # Quick generation without AI
├── package.json                # Project configuration
├── .env                        # Environment variables
├── README.md                   # Project documentation
├── tools/
│   ├── fileGenerator.js        # File system tools
│   └── executor.js             # Command execution tools
├── templates/
│   └── scaler.js              # Scaler website template
└── scaler_website/            # Generated website output (created after running)
    ├── index.html
    ├── styles.css
    └── script.js
```

## Example Usage

### Example 1: Clone Scaler Academy

```
Interactive Mode:
> Clone the Scaler Academy website with all sections

The agent will:
1. Understand your request
2. Create necessary folders
3. Generate HTML, CSS, and JS files
4. Save them to the specified location
5. Open in browser
```

### Example 2: Create Todo App

```
Interactive Mode:
> Create a todo application with HTML, CSS, and JavaScript

The agent will break this down into steps and generate the files.
```

## How the Agent Works

The agent follows a reasoning loop:

1. **START** - Understand the task
2. **THINK** - Plan the approach
3. **THINK** - Identify required files/components
4. **TOOL** - Create folders/files
5. **OBSERVE** - Check results
6. **THINK** - Plan next steps
7. ... (repeat as needed)
8. **OUTPUT** - Task complete

This multi-step approach ensures the agent reasons through the problem instead of trying to do everything at once.

## Troubleshooting

### API Key Error

```
Error: OPENAI_API_KEY is not set
```

Solution: Add your API key to the `.env` file

### Rate Limit

```
Error: 429 Too Many Requests
```

Solution: The agent will automatically wait 30 seconds and retry

### JSON Parse Error

```
Failed to parse JSON response
```

Solution: The agent will automatically ask for a properly formatted response

## Tips for Better Results

1. **Be specific** with your instructions
2. **Mention the sections** you want (header, footer, hero, etc.)
3. **Specify the folder name** where files should be saved
4. **Ask for specific styling** (modern, minimal, colorful, etc.)

## Requirements

- Node.js 16 or higher
- npm or yarn
- OpenAI API key
- Modern web browser (for viewing generated websites)

## Features

✅ Conversational CLI interface
✅ AI-powered reasoning and planning
✅ Multi-step task execution
✅ HTML/CSS/JavaScript generation
✅ Automatic browser opening
✅ Real file system operations
✅ Error handling and recovery
✅ Rate limit handling

## Next Steps

1. Try the demo: `npm run demo`
2. Generate a quick website: `npm run generate`
3. Use interactive mode: `npm start`
4. Push to GitHub
5. Record a YouTube demo

## Support

For issues or questions, check the README.md or the main documentation.
