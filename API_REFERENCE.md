# API Reference

## Available Tools

### File System Tools

#### `createFolder(folderPath: string)`

Creates a folder at the specified path.

**Parameters:**

- `folderPath` (string): Path where folder should be created

**Returns:** Success message with folder location

**Example:**

```javascript
await createFolder("my_project");
// Returns: "✓ Folder created successfully at: C:\Users\...\my_project"
```

---

#### `createFile(filePath: string, content: string)`

Creates a file with the given content.

**Parameters:**

- `filePath` (string): Path where file should be created
- `content` (string): Content to write to the file

**Returns:** Success message with file location

**Example:**

```javascript
await createFile("index.html", "<html>...</html>");
// Returns: "✓ File created successfully at: C:\Users\...\index.html"
```

---

#### `readFile(filePath: string)`

Reads and returns the content of a file.

**Parameters:**

- `filePath` (string): Path of file to read

**Returns:** File content as string

**Example:**

```javascript
const content = await readFile("index.html");
// Returns: "<html>...</html>"
```

---

#### `listDirectory(dirPath: string)`

Lists all files and folders in a directory.

**Parameters:**

- `dirPath` (string): Directory path to list

**Returns:** List of file/folder names

**Example:**

```javascript
await listDirectory("project");
// Returns: "✓ Files in C:\Users\...\project: file1.js, file2.css, folder1"
```

---

### Command Execution Tools

#### `executeCommand(cmd: string)`

Executes a system command.

**Parameters:**

- `cmd` (string): Command to execute

**Returns:** Command output

**Example:**

```javascript
await executeCommand("npm install");
// Returns: "✓ Command executed successfully"
```

---

#### `openInBrowser(filePath: string)`

Opens a file in the default browser.

**Parameters:**

- `filePath` (string): Path to file (usually HTML)

**Returns:** Success or error message

**Example:**

```javascript
await openInBrowser("index.html");
// Returns: "✓ Opening in browser: C:\Users\...\index.html"
```

---

## System Prompt

The agent uses a system prompt that defines:

1. **Role**: AI Assistant for website cloning
2. **Input/Output Format**: Strict JSON format
3. **Available Tools**: List of all tools
4. **Reasoning Rules**: How the agent should think
5. **Task Context**: Specific instructions for the current task

### System Prompt Structure

```javascript
const system_prompt = `
You are an AI Assistant for website cloning...

You MUST follow the JSON format:
{ "step": "START|THINK|TOOL|OBSERVE|OUTPUT", "content": "...", ... }

Available Tools:
1. createFolder(folderPath)
2. createFile(filePath, content)
...

Important Rules:
1. Always respond in valid JSON format
2. Do ONE thing at a time
...
`;
```

---

## Response Format

### Valid JSON Response Structure

```json
{
  "step": "START|THINK|TOOL|OBSERVE|OUTPUT",
  "content": "Description or result",
  "tool_name": "toolName (if TOOL step)",
  "tool_args": ["arg1", "arg2"] (if TOOL step)
}
```

### Examples

**START Step:**

```json
{
  "step": "START",
  "content": "User wants me to create a todo app"
}
```

**THINK Step:**

```json
{
  "step": "THINK",
  "content": "I need to create HTML file for the structure"
}
```

**TOOL Step:**

```json
{
  "step": "TOOL",
  "tool_name": "createFolder",
  "tool_args": ["todo_app"],
  "content": "Creating the project folder"
}
```

**OBSERVE Step:**

```json
{
  "step": "OBSERVE",
  "content": "✓ Folder created successfully at: C:\Users\...\todo_app"
}
```

**OUTPUT Step:**

```json
{
  "step": "OUTPUT",
  "content": "Todo app created successfully! You can find it at C:\Users\...\todo_app"
}
```

---

## Agent Loop

The agent processes tasks through a loop:

```
┌─────────────┐
│   START     │ ← Agent receives task
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   THINK     │ ← Agent reasons about next step
└──────┬──────┘
       │
       ├─ Need more thinking?
       │  ├─ Yes: Loop back to THINK
       │  └─ No: Continue to TOOL
       │
       ▼
┌─────────────┐
│    TOOL     │ ← Execute specific action
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   OBSERVE   │ ← Receive and process result
└──────┬──────┘
       │
       ├─ Task complete?
       │  ├─ Yes: OUTPUT
       │  └─ No: Loop back to THINK
       │
       ▼
┌─────────────┐
│   OUTPUT    │ ← Send final result
└─────────────┘
```

---

## Error Handling

### API Errors

```javascript
catch (error) {
  if (error.status === 429) {
    // Rate limited - wait 30 seconds and retry
  } else {
    // Other error
  }
}
```

### JSON Parse Errors

```javascript
catch (e) {
  // Ask agent to provide valid JSON format
  conversationMessages.push({
    role: "user",
    content: 'Please respond in valid JSON format: {"step": "...", "content": "..."}'
  });
}
```

### Tool Execution Errors

```javascript
if (!tool_map[toolName]) {
  // Tool not found
} else if (error) {
  // Tool execution failed
}
```

---

## Configuration

### Environment Variables (.env)

```env
OPENAI_API_KEY=sk-your-api-key-here
```

### Model Selection

Current model: `gpt-4o-mini`

```javascript
const response = await client.chat.completions.create({
  model: "gpt-4o-mini", // Can change to "gpt-4", etc.
  messages: conversationMessages,
  temperature: 0.7, // 0.7 balances creativity and consistency
});
```

---

## Performance Tuning

### Temperature

- `0.7` (current): Balanced creativity and consistency
- `0.0-0.3`: More deterministic
- `0.8-1.0`: More creative

### Max Steps

```javascript
let maxSteps = 50; // Prevents infinite loops
```

### Rate Limiting

```javascript
await sleep(500); // Small delay between API calls
```

---

## Debugging

### Enable Detailed Logging

Currently the agent logs:

- ✅ Each step execution
- ✅ Tool calls and arguments
- ✅ Execution results
- ✅ Errors

### Check Conversation History

```javascript
// Print message history
console.log(JSON.stringify(conversationMessages, null, 2));
```

### Test Specific Tools

```bash
# Generate website directly (no API)
npm run generate

# Run demo with pre-configured task
npm run demo
```

---

## Advanced Usage

### Custom Tool Addition

```javascript
// Add new tool
export async function myTool(arg) {
  // Implementation
  return result;
}

// Register in tool_map
const tool_map = {
  // ... existing
  myTool: myTool,
};

// Update system prompt with tool description
const toolDescriptions = `
...
7. myTool(arg: string) - Description of what it does
`;
```

### Custom Templates

Create a new template file:

```javascript
// templates/myTemplate.js
export const myTemplate = {
  html: `<!DOCTYPE html>...`,
  css: `body { ... }`,
  js: `console.log(...);`,
};
```

### Multiple Task Execution

The interactive mode allows multiple tasks:

```javascript
while (continueChat) {
  const userInput = readlineSync.question("> ");
  await agentLoop(userInput);
  // Ask if user wants to continue
}
```

---

## Best Practices

1. **Always use relative paths** for generated files
2. **Include error context** in observations
3. **Verify file creation** before proceeding
4. **Break complex tasks** into smaller steps
5. **Handle edge cases** gracefully
6. **Keep API calls minimal** to reduce costs
7. **Use meaningful tool arguments** for clarity
8. **Log important events** for debugging

---

## Troubleshooting

### API Key Not Working

```
Solution: Verify key at https://platform.openai.com/api-keys
```

### Files Not Created

```
Solution: Check file path permissions and disk space
```

### JSON Parse Errors

```
Solution: Agent will automatically ask for proper JSON format
```

### Browser Not Opening

```
Solution: Verify file path and default browser association
```

---

## Version Information

- **Node.js**: 16+
- **OpenAI API**: v4.20.0
- **dotenv**: v16.0.3
- **readline-sync**: v1.4.10

---

## Support

For issues, check:

1. `.env` file has valid API key
2. Node.js is version 16 or higher
3. All dependencies installed (`npm install`)
4. File paths are correct
5. Disk space available

See README.md for more information.
