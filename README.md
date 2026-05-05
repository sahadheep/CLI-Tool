# CIL Tool AI Agent - Website Cloner

A conversational CLI agent that uses OpenAI to reason through tasks, break them into steps, and generate fully functional websites (HTML, CSS, JavaScript) based on natural language instructions.

## Features

- **Conversational Interface**: Chat with the agent in the terminal
- **Reasoning Loop**: Agent follows INPUT → THINK → TOOL → OBSERVE → OUTPUT pattern
- **File Generation**: Creates HTML, CSS, and JS files dynamically
- **Website Cloning**: Can clone websites like Scaler Academy with proper structure
- **Tool Integration**: Executes various tools to generate content
- **Multi-Step Process**: Agent doesn't complete everything in one step

## Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd cil-ai-agent
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env
# Add your OpenAI API key to .env
```

## Usage

```bash
npm start
```

Then chat with the agent in the terminal. Example:

```
> Clone the Scaler Academy website and save it in a folder named "scaler_clone"
```

The agent will:

1. Understand your request
2. Break it down into steps
3. Generate HTML files
4. Create CSS styling
5. Add JavaScript functionality
6. Save the output in the specified folder
7. Open it in your browser

## Project Structure

```
├── index.js              # Main agent logic
├── tools/
│   ├── fileGenerator.js  # File creation tools
│   └── executor.js       # Command execution tools
├── templates/
│   └── scaler.js         # Scaler website template
├── output/               # Generated websites
└── package.json
```

## How It Works

The agent operates on a state machine with the following steps:

- **START**: Initialize the task
- **THINK**: Reason about the next step
- **TOOL**: Execute a specific tool
- **OBSERVE**: Receive and process the tool output
- **OUTPUT**: Provide the final result

The agent loops through these steps multiple times, learning from each observation until the task is complete.

## Tools Available

1. **createFile**: Create files with content
2. **createFolder**: Create directories
3. **readFile**: Read file contents
4. **executeCommand**: Run system commands
5. **generateHtmlFile**: Generate HTML files
6. **generateCssFile**: Generate CSS files
7. **generateJsFile**: Generate JavaScript files

## Example Workflow

```
User: "Create a Scaler Academy website clone with header, hero, and footer"

Agent Step 1 (START): Understanding the task
Agent Step 2 (THINK): Planning the structure
Agent Step 3 (THINK): Identifying required files
Agent Step 4 (TOOL): createFolder - Create output directory
Agent Step 5 (OBSERVE): Folder created successfully
Agent Step 6 (THINK): Planning HTML structure
Agent Step 7 (TOOL): generateHtmlFile - Create index.html
... (continues with CSS, JavaScript)
Agent Final: OUTPUT - Website created and ready!
```

## Requirements

- Node.js 16+
- OpenAI API Key
- npm or yarn

## API Keys

Get your OpenAI API key from: https://platform.openai.com/api-keys

## License

MIT

## Author

Student - Scaler Academy Assignment 02

# CIL Tool AI Agent - Website Cloner

A conversational CLI agent that uses OpenAI to reason through tasks, break them into steps, and generate fully functional websites (HTML, CSS, JavaScript) based on natural language instructions.

## Features

- **Conversational Interface**: Chat with the agent in the terminal
- **Reasoning Loop**: Agent follows INPUT → THINK → TOOL → OBSERVE → OUTPUT pattern
- **File Generation**: Creates HTML, CSS, and JS files dynamically
- **Website Cloning**: Can clone websites like Scaler Academy with proper structure
- **Tool Integration**: Executes various tools to generate content
- **Multi-Step Process**: Agent doesn't complete everything in one step

## Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd cil-ai-agent
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env
# Add your OpenAI API key to .env
```

## Usage

```bash
npm start
```

Then chat with the agent in the terminal. Example:

```
> Clone the Scaler Academy website and save it in a folder named "scaler_clone"
```

The agent will:

1. Understand your request
2. Break it down into steps
3. Generate HTML files
4. Create CSS styling
5. Add JavaScript functionality
6. Save the output in the specified folder
7. Open it in your browser

## Project Structure

```
├── index.js              # Main agent logic
├── tools/
│   ├── fileGenerator.js  # File creation tools
│   └── executor.js       # Command execution tools
├── templates/
│   └── scaler.js         # Scaler website template
├── output/               # Generated websites
└── package.json
```

## How It Works

The agent operates on a state machine with the following steps:

- **START**: Initialize the task
- **THINK**: Reason about the next step
- **TOOL**: Execute a specific tool
- **OBSERVE**: Receive and process the tool output
- **OUTPUT**: Provide the final result

The agent loops through these steps multiple times, learning from each observation until the task is complete.

## Tools Available

1. **createFile**: Create files with content
2. **createFolder**: Create directories
3. **readFile**: Read file contents
4. **executeCommand**: Run system commands
5. **generateHtmlFile**: Generate HTML files
6. **generateCssFile**: Generate CSS files
7. **generateJsFile**: Generate JavaScript files

## Example Workflow

```
User: "Create a Scaler Academy website clone with header, hero, and footer"

Agent Step 1 (START): Understanding the task
Agent Step 2 (THINK): Planning the structure
Agent Step 3 (THINK): Identifying required files
Agent Step 4 (TOOL): createFolder - Create output directory
Agent Step 5 (OBSERVE): Folder created successfully
Agent Step 6 (THINK): Planning HTML structure
Agent Step 7 (TOOL): generateHtmlFile - Create index.html
... (continues with CSS, JavaScript)
Agent Final: OUTPUT - Website created and ready!
```

## Requirements

- Node.js 16+
- OpenAI API Key
- npm or yarn

## API Keys

Get your OpenAI API key from: https://platform.openai.com/api-keys

## License

MIT

## Author

Student - Scaler Academy Assignment 02

> > > > > > > 57101db (Initial commit: CIL Tool AI Agent - Website Cloner)
