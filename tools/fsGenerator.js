import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createFolder(folderPath) {
  try {
    const absolutePath = path.isAbsolute(folderPath)
      ? folderPath
      : path.join(process.cwd(), folderPath);

    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath, { recursive: true });
      return `✓ Folder created successfully at: ${absolutePath}`;
    } else {
      return `✓ Folder already exists at: ${absolutePath}`;
    }
  } catch (error) {
    return `✗ Error creating folder: ${error.message}`;
  }
}

export async function createFile(filePath, content) {
  try {
    const absolutePath = path.isAbsolute(filePath)
      ? filePath
      : path.join(process.cwd(), filePath);

    const dir = path.dirname(absolutePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(absolutePath, content, "utf-8");
    return `✓ File created successfully at: ${absolutePath}`;
  } catch (error) {
    return `✗ Error creating file: ${error.message}`;
  }
}

export async function readFile(filePath) {
  try {
    const absolutePath = path.isAbsolute(filePath)
      ? filePath
      : path.join(process.cwd(), filePath);

    const content = fs.readFileSync(absolutePath, "utf-8");
    return content;
  } catch (error) {
    return `✗ Error reading file: ${error.message}`;
  }
}

export async function listDirectory(dirPath) {
  try {
    const absolutePath = path.isAbsolute(dirPath)
      ? dirPath
      : path.join(process.cwd(), dirPath);

    if (!fs.existsSync(absolutePath)) {
      return `✗ Directory does not exist: ${absolutePath}`;
    }

    const files = fs.readdirSync(absolutePath);
    return `✓ Files in ${absolutePath}: ${files.join(", ")}`;
  } catch (error) {
    return `✗ Error listing directory: ${error.message}`;
  }
}

export async function deleteFile(filePath) {
  try {
    const absolutePath = path.isAbsolute(filePath)
      ? filePath
      : path.join(process.cwd(), filePath);

    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
      return `✓ File deleted successfully: ${absolutePath}`;
    } else {
      return `✗ File does not exist: ${absolutePath}`;
    }
  } catch (error) {
    return `✗ Error deleting file: ${error.message}`;
  }
}
