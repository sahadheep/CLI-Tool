import "dotenv/config";
import { OpenAI } from "openai";
import {
  createFolder,
  createFile,
  readFile,
  listDirectory,
} from "./tools/fileGenerator.js";
import { executeCommand, openInBrowser } from "./tools/executor.js";
import scalerWebsiteTemplate from "./templates/scaler.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Tool map - maps tool names to their implementations
const tool_map = {
  createFolder: createFolder,
  createFile: createFile,
  readFile: readFile,
  listDirectory: listDirectory,
  executeCommand: executeCommand,
  openInBrowser: openInBrowser,
};

// Tool descriptions for the system prompt
const toolDescriptions = `
Available Tools:
1. createFolder(folderPath: string) - Creates a folder at the specified path
2. createFile(filePath: string, content: string) - Creates a file with the given content
3. readFile(filePath: string) - Reads and returns the content of a file
4. listDirectory(dirPath: string) - Lists all files and folders in a directory
5. executeCommand(cmd: string) - Executes a system command
6. openInBrowser(filePath: string) - Opens a file in the default browser
`;

let stepCount = 0;
let maxSteps = 50;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function agentLoop(userMessage) {
  stepCount = 0;
  const conversationMessages = [
    {
      role: "system",
      content: `You are an AI Assistant for website cloning and file generation. Your job is to break down complex tasks into smaller steps.

You MUST follow the JSON format for every response:
{ "step": "START|THINK|TOOL|OBSERVE|OUTPUT", "content": "string", "tool_name": "string (optional)", "tool_args": "array (optional)" }

${toolDescriptions}

Important Rules:
1. Always respond in valid JSON format
2. Do ONE thing at a time - never combine multiple tools in one step
3. Always THINK before using a TOOL
4. Wait for OBSERVE step feedback before proceeding
5. For file content, put JSON inside the "content" field
6. Break down website generation into multiple steps
7. The agent should loop through multiple thinking and tool-calling steps
8. Only use OUTPUT step when the task is truly complete
9. When generating HTML files, use realistic website structures
10. Include proper HTML, CSS, and JavaScript in the files
11. Always verify files were created successfully before proceeding

For Scaler Academy website cloning:
- Create a realistic looking website with Header, Hero Section, Footer, Courses section, and Features section
- Use modern CSS styling with gradients and animations
- Include interactive JavaScript elements
- Make it fully functional and visually appealing

Current task: ${userMessage}`,
    },
    {
      role: "user",
      content: userMessage,
    },
  ];

  console.log("\n" + "=".repeat(80));
  console.log("🤖 AGENT STARTED - Let's break this down step by step");
  console.log("=".repeat(80) + "\n");

  while (stepCount < maxSteps) {
    stepCount++;
    console.log(`\n📍 Step ${stepCount}:`);
    console.log("-".repeat(60));

    try {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: conversationMessages,
        temperature: 0.7,
      });

      const contentText = response.choices[0].message.content;

      let parsedContent;
      try {
        parsedContent = JSON.parse(contentText);
      } catch (e) {
        console.log(
          "❌ Failed to parse JSON response. Asking agent to fix format.\n",
        );
        conversationMessages.push({
          role: "assistant",
          content: contentText,
        });
        conversationMessages.push({
          role: "user",
          content:
            'Please respond in valid JSON format: { "step": "...", "content": "..." }',
        });
        continue;
      }

      // Add assistant response to conversation
      conversationMessages.push({
        role: "assistant",
        content: JSON.stringify(parsedContent),
      });

      // Display the step
      if (parsedContent.step === "START") {
        console.log("🚀 START - Initializing task");
        console.log(`   ${parsedContent.content}`);
      } else if (parsedContent.step === "THINK") {
        console.log("🧠 THINKING");
        console.log(`   ${parsedContent.content}`);
      } else if (parsedContent.step === "TOOL") {
        console.log(`🔧 TOOL CALL: ${parsedContent.tool_name}`);
        console.log(`   Arguments: ${JSON.stringify(parsedContent.tool_args)}`);

        // Execute the tool
        let toolResult;
        const toolName = parsedContent.tool_name;
        const toolArgs = parsedContent.tool_args || [];

        if (!tool_map[toolName]) {
          toolResult = `❌ Tool "${toolName}" not found. Available tools: ${Object.keys(tool_map).join(", ")}`;
          console.log(`   ${toolResult}`);
        } else {
          try {
            if (Array.isArray(toolArgs)) {
              toolResult = await tool_map[toolName](...toolArgs);
            } else {
              toolResult = await tool_map[toolName](toolArgs);
            }
            console.log(`   ✓ Result: ${toolResult}`);
          } catch (error) {
            toolResult = `❌ Error executing tool: ${error.message}`;
            console.log(`   ${toolResult}`);
          }
        }

        // Add observation to conversation
        conversationMessages.push({
          role: "user",
          content: JSON.stringify({
            step: "OBSERVE",
            content: toolResult,
          }),
        });
      } else if (parsedContent.step === "OBSERVE") {
        console.log("👁️ OBSERVING");
        console.log(`   ${parsedContent.content}`);
      } else if (parsedContent.step === "OUTPUT") {
        console.log("✨ OUTPUT - Task Complete!");
        console.log(`   ${parsedContent.content}`);
        console.log("\n" + "=".repeat(80));
        console.log("🎉 AGENT FINISHED SUCCESSFULLY!");
        console.log("=".repeat(80) + "\n");
        break;
      } else {
        console.log(`❓ Unknown step: ${parsedContent.step}`);
      }

      // Small delay to avoid rate limiting
      await sleep(500);
    } catch (error) {
      console.error(`❌ API Error: ${error.message}`);
      if (error.status === 429) {
        console.log("⏳ Rate limited. Waiting 30 seconds...");
        await sleep(30000);
      } else {
        break;
      }
    }
  }

  if (stepCount >= maxSteps) {
    console.log("\n⚠️ Reached maximum steps. Agent stopping.");
  }
}

// Demo mode - runs a specific example without interactive input
async function runDemo() {
  console.log("\n");
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║          🤖 CIL TOOL - AI AGENT WEBSITE CLONER 🤖         ║");
  console.log("║                        DEMO MODE                           ║");
  console.log("╚════════════════════════════════════════════════════════════╝");
  console.log("\n");

  // Check for API key
  if (
    !process.env.OPENAI_API_KEY ||
    process.env.OPENAI_API_KEY.includes("your-api-key")
  ) {
    console.error("❌ Error: OPENAI_API_KEY is not set properly in .env file");
    console.error("Please add your OpenAI API key to .env file");
    process.exit(1);
  }

  // Run demo task
  const demoTask =
    "Clone the Scaler Academy website with header, hero section, courses grid, features section, contact form, and footer. Create it in a folder named 'scaler_clone' and open it in the browser when done.";

  console.log("📝 Demo Task:");
  console.log(`   "${demoTask}"\n`);

  await agentLoop(demoTask);
}

// Run demo
runDemo().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
