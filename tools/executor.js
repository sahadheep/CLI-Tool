import { exec } from "child_process";
import { platform } from "os";

export async function executeCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        resolve(`✗ Error executing command: ${error.message}`);
      } else if (stderr) {
        resolve(`⚠ ${stderr}`);
      } else {
        resolve(`✓ ${stdout || "Command executed successfully"}`);
      }
    });
  });
}

export async function openInBrowser(filePath) {
  try {
    const absolutePath = require("path").resolve(filePath);
    let command;

    if (platform() === "win32") {
      command = `start ${absolutePath}`;
    } else if (platform() === "darwin") {
      command = `open ${absolutePath}`;
    } else {
      command = `xdg-open ${absolutePath}`;
    }

    return new Promise((resolve) => {
      exec(command, (error) => {
        if (error) {
          resolve(`✗ Could not open file in browser: ${error.message}`);
        } else {
          resolve(`✓ Opening in browser: ${absolutePath}`);
        }
      });
    });
  } catch (error) {
    return `✗ Error: ${error.message}`;
  }
}
