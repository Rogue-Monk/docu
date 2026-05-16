/**
 * Holds templates for different types of documentation.
 * 
 * Usecase: Provides standard templates (e.g., API Reference, Component Guide, Setup Guide)
 * so that the generated markdown follows a consistent structure across the whole project.
 */
export const TEMPLATES = {
  apiReference: `# {title}\n\n## Description\n{description}\n\n## Usage\n\`\`\`ts\n{usage}\n\`\`\``,
  // Add more templates as needed
};
