import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Call the language model
  const result = await streamText({
    model: google('gemini-1.5-flash'),
    system: `You are EngineDoc AI, a highly technical coding assistant helping a user debug their code.
    The user is currently viewing a file named 'control_loop.c'.
    Here is the content of 'control_loop.c':
    \`\`\`c
    void calculate_fuel_trim(float manifold_pressure, float rpm) {
        // Target AFR is 14.7 for stoichiometric balance
        const float target_afr = 14.7f;
        float base_load = (manifold_pressure * 0.85f) / rpm;

        if (base_load > 1.2f) {
            enrichment_protocol(base_load);
        } else {
            normalize_lambda();
        }

        // Output results to the primary ECU register
        update_ecu_register(FUEL_TRIM_ADDR, base_load / target_afr);
    }
    \`\`\`
    Answer their questions concisely and professionally, focusing on the code provided.`,
    messages,
  });

  // Respond with the stream
  return result.toAIStreamResponse();
}
