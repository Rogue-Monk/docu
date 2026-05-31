import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Extract the `messages`, `filename`, and `code` from the body of the request
  const { messages, filename, code } = await req.json();

  const activeFilename = filename || 'control_loop.c';
  const activeCode = code || '';

  // Call the language model
  const result = await streamText({
    model: google('models/gemini-3.5-flash'),
    system: `You are EngineDoc AI, a highly technical coding assistant helping a user debug their code.
    The user is currently viewing a file named '${activeFilename}'.
    Here is the content of '${activeFilename}':
    \`\`\`
    ${activeCode}
    \`\`\`
    Answer their questions concisely and professionally, focusing on the code provided. If the code is not provided or empty, ask the user to select or paste some code first.`,
    messages,
  });

  // Respond with the stream
  return result.toAIStreamResponse();
}
