import { OpenRouter } from "@openrouter/sdk";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) {
  console.error("Error: Please set your OPENROUTER_API_KEY in the .env file.");
  process.exit(1);
}

const openrouter = new OpenRouter({
  apiKey: apiKey
});

console.log("Streaming response from OpenRouter using 'openrouter/free'...\n");

try {
  // Stream the response to get reasoning tokens in usage
  const stream = await openrouter.chat.send({
    model: "openrouter/free",
    messages: [
      {
        role: "user",
        content: "How many r's are in the word 'strawberry'?"
      }
    ],
    stream: true
  });

  let response = "";
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      response += content;
      process.stdout.write(content);
    }

    // Usage information comes in the final chunk
    if (chunk.usage) {
      console.log("\n\n--- Usage Details ---");
      console.log("Prompt tokens:", chunk.usage.promptTokens);
      console.log("Completion tokens:", chunk.usage.completionTokens);
      if (chunk.usage.reasoningTokens !== undefined) {
        console.log("Reasoning tokens:", chunk.usage.reasoningTokens);
      } else {
        console.log("Reasoning tokens: Not returned by this model.");
      }
    }
  }
} catch (error) {
  printError(error);
}

function printError(error) {
  console.error("\nAn error occurred while calling the OpenRouter API:", error.message);
  if (error.message.includes("401") || error.message.includes("Unauthorized")) {
    console.log("💡 Tip: Verify that your API key in the .env file is correct and active.");
  }
}
