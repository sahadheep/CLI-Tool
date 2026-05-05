import { createFolder, createFile } from "./tools/fsGenerator.js";
import { openInBrowser } from "./tools/executor.js";
import scalerWebsiteTemplate from "./templates/scalerTemplate.js";
import path from "path";

async function generateScalerWebsite() {
  console.log(
    "\n╔════════════════════════════════════════════════════════════╗",
  );
  console.log("║          🌐 GENERATING SCALER ACADEMY WEBSITE 🌐          ║");
  console.log(
    "╚════════════════════════════════════════════════════════════╝\n",
  );

  try {
    // Create output directory
    console.log("📁 Creating directory structure...");
    const outputDir = path.join(process.cwd(), "scaler_website");
    await createFolder(outputDir);

    // Create HTML file
    console.log("📄 Creating index.html...");
    await createFile(
      path.join(outputDir, "index.html"),
      scalerWebsiteTemplate.html,
    );

    // Create CSS file
    console.log("🎨 Creating styles.css...");
    await createFile(
      path.join(outputDir, "styles.css"),
      scalerWebsiteTemplate.css,
    );

    // Create JS file
    console.log("⚡ Creating script.js...");
    await createFile(
      path.join(outputDir, "script.js"),
      scalerWebsiteTemplate.js,
    );

    // Create course detail pages
    console.log("📄 Creating python-fundamentals.html...");
    await createFile(
      path.join(outputDir, "python-fundamentals.html"),
      scalerWebsiteTemplate.pythonHtml,
    );

    console.log("📄 Creating interview-prep.html...");
    await createFile(
      path.join(outputDir, "interview-prep.html"),
      scalerWebsiteTemplate.interviewHtml,
    );

    console.log("\n✅ Website files created successfully!");
    console.log(`📍 Location: ${outputDir}`);

    // Open in browser
    console.log("\n🌐 Opening website in default browser...");
    const indexPath = path.join(outputDir, "index.html");
    await openInBrowser(indexPath);

    console.log("\n🎉 Done! Your Scaler Academy website clone is ready!");
    console.log(`\n💡 You can find the files at: ${outputDir}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

generateScalerWebsite();
