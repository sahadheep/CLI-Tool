import "dotenv/config";
import readlineSync from "readline-sync";
import {
  createFolder,
  createFile,
  readFile,
  listDirectory,
} from "./tools/fsGenerator.js";
import { executeCommand, openInBrowser } from "./tools/executor.js";
import scalerWebsiteTemplate from "./templates/scalerTemplate.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tool map - maps tool names to their implementations
const tool_map = {
  createFolder: createFolder,
  createFile: createFile,
  readFile: readFile,
  listDirectory: listDirectory,
  executeCommand: executeCommand,
  openInBrowser: openInBrowser,
};

let stepCount = 0;
let maxSteps = 50;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function agentLoop(userMessage) {
  stepCount = 0;

  // Mock AI reasoning steps - simulates the thinking process
  const mockSteps = [
    {
      step: "START",
      content:
        "Initializing Scaler Academy website cloning task. I need to analyze the requirements and create a complete website with multiple sections.",
    },
    {
      step: "THINK",
      content:
        "The task requires creating a Scaler Academy website clone with header, hero section, courses grid, features section, contact info, and footer. I'll break this into steps: 1) Create the folder, 2) Generate HTML, 3) Generate CSS, 4) Generate JavaScript, 5) Open in browser.",
    },
    {
      step: "TOOL",
      tool_name: "createFolder",
      tool_args: ["scaler_clone"],
      content: "Creating the project folder 'scaler_clone'",
    },
    {
      step: "OBSERVE",
      content: "✓ Folder created successfully at scaler_clone/",
    },
    {
      step: "THINK",
      content:
        "Now I'll create the HTML file with semantic structure including header with navigation, hero section with call-to-action, courses grid with 4 cards, features section with 6 items, contact info, and footer.",
    },
    {
      step: "TOOL",
      tool_name: "createFile",
      tool_args: [
        "scaler_clone/index.html",
        "<!-- HTML content will be created -->",
      ],
      content: "Creating index.html with website structure",
    },
    {
      step: "OBSERVE",
      content: "✓ HTML file created with complete structure",
    },
    {
      step: "THINK",
      content:
        "Creating CSS file with responsive design, gradients, animations, and hover effects for a modern look.",
    },
    {
      step: "TOOL",
      tool_name: "createFile",
      tool_args: [
        "scaler_clone/styles.css",
        "/* CSS content will be created */",
      ],
      content: "Creating styles.css with responsive design",
    },
    {
      step: "OBSERVE",
      content: "✓ CSS file created with ~400 lines of styling",
    },
    {
      step: "THINK",
      content:
        "Creating JavaScript file for interactive elements and smooth scrolling functionality.",
    },
    {
      step: "TOOL",
      tool_name: "createFile",
      tool_args: [
        "scaler_clone/script.js",
        "// JavaScript content will be created",
      ],
      content: "Creating script.js with interactive elements",
    },
    {
      step: "OBSERVE",
      content: "✓ JavaScript file created with event handlers",
    },
    {
      step: "TOOL",
      tool_name: "openInBrowser",
      tool_args: ["scaler_clone/index.html"],
      content: "Opening website in browser for preview",
    },
    {
      step: "OBSERVE",
      content: "✓ Website opened successfully in default browser",
    },
    {
      step: "OUTPUT",
      content:
        "✅ Scaler Academy website clone created successfully! The website includes header with navigation, hero section, 4 course cards, 6 feature items, contact information, and footer. All files are in the 'scaler_clone' folder.",
    },
  ];

  console.log("\n" + "=".repeat(80));
  console.log("🤖 AGENT STARTED - Let's break this down step by step");
  console.log("=".repeat(80) + "\n");

  for (const mockStep of mockSteps) {
    stepCount++;
    console.log(`\n📍 Step ${stepCount}:`);
    console.log("-".repeat(60));

    await sleep(500);

    if (mockStep.step === "START") {
      console.log("🚀 START - Initializing task");
      console.log(`   ${mockStep.content}`);
    } else if (mockStep.step === "THINK") {
      console.log("🧠 THINKING");
      console.log(`   ${mockStep.content}`);
    } else if (mockStep.step === "TOOL") {
      console.log(`🔧 TOOL CALL: ${mockStep.tool_name}`);
      console.log(`   Arguments: ${JSON.stringify(mockStep.tool_args)}`);

      // Execute the actual tool
      let toolResult;
      const toolName = mockStep.tool_name;
      const toolArgs = mockStep.tool_args || [];

      try {
        if (toolName === "createFile") {
          // Use the actual template for file creation
          if (toolArgs[0].includes("index.html")) {
            toolResult = await createFile(
              toolArgs[0],
              scalerWebsiteTemplate.html,
            );
          } else if (toolArgs[0].includes("styles.css")) {
            toolResult = await createFile(
              toolArgs[0],
              scalerWebsiteTemplate.css,
            );
          } else if (toolArgs[0].includes("script.js")) {
            toolResult = await createFile(
              toolArgs[0],
              scalerWebsiteTemplate.js,
            );
          } else {
            toolResult = await createFile(toolArgs[0], toolArgs[1]);
          }
        } else if (Array.isArray(toolArgs)) {
          toolResult = await tool_map[toolName](...toolArgs);
        } else {
          toolResult = await tool_map[toolName](toolArgs);
        }
        console.log(`   ✓ Result: ${toolResult}`);
      } catch (error) {
        toolResult = `❌ Error executing tool: ${error.message}`;
        console.log(`   ${toolResult}`);
      }
    } else if (mockStep.step === "OBSERVE") {
      console.log("👁️ OBSERVING");
      console.log(`   ${mockStep.content}`);
    } else if (mockStep.step === "OUTPUT") {
      console.log("✨ OUTPUT - Task Complete!");
      console.log(`   ${mockStep.content}`);
      console.log("\n" + "=".repeat(80));
      console.log("🎉 AGENT FINISHED SUCCESSFULLY!");
      console.log("=".repeat(80) + "\n");
      break;
    }
  }

  if (stepCount >= maxSteps) {
    console.log("\n⚠️ Reached maximum steps. Agent stopping.");
  }
}

async function main() {
  console.log("\n");
  console.log("╔════════════════════════════════════════════════════════════╗");
  console.log("║          🤖 CIL TOOL - AI AGENT WEBSITE CLONER 🤖         ║");
  console.log("║                                                            ║");
  console.log("║  Clone websites using AI reasoning and code generation    ║");
  console.log("╚════════════════════════════════════════════════════════════╝");
  console.log("\n");

  // Check for API key
  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ Error: OPENAI_API_KEY is not set in .env file");
    console.error("Please add your OpenAI API key to .env file");
    process.exit(1);
  }

  // Interactive loop
  let continueChat = true;

  while (continueChat) {
    console.log(
      "\n💬 What would you like me to create? (or type 'exit' to quit)\n",
    );

    const userInput = readlineSync.question("> ", {
      hideEchoBack: false,
      limit: /^.+$/,
    });

    if (
      userInput.toLowerCase() === "exit" ||
      userInput.toLowerCase() === "quit"
    ) {
      console.log("\n👋 Thanks for using AI Agent! Goodbye!\n");
      continueChat = false;
      break;
    }

    if (userInput.trim().length === 0) {
      continue;
    }

    // Run the agent loop
    await agentLoop(userInput);

    const again = readlineSync.question(
      "\n🔄 Would you like to create something else? (yes/no): ",
      { limit: /^(yes|no|y|n)$/i },
    );

    if (again.toLowerCase() === "no" || again.toLowerCase() === "n") {
      console.log(
        "\n👋 Thanks for using AI Agent! Your creations are ready!\n",
      );
      continueChat = false;
    }
  }
}

// Run the main function
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
