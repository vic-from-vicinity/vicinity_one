# OpenRouter Streaming & Reasoning Token Tester

This is a simple Node.js project designed to test streaming responses and reasoning tokens using the official `@openrouter/sdk` in a type-safe ESM environment.

---

## 🚀 Setup & Execution

### 1. Configure your API Key
Open the [.env](file:///f:/Vicinity/Clients/JMarie/openrouter_test/.env) file in this directory and enter your OpenRouter API key inside the quotes:
```env
OPENROUTER_API_KEY="your_api_key_here"
```

> [!NOTE]
> If you don't have an API key, you can generate one for free (no credit card required) at [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys).

### 2. Run the Script
Open your terminal in this directory and execute:
```bash
npm start
```
*Note: If you run into PowerShell script execution errors, you can run the command using:*
```powershell
node index.js
```

---

## 🧠 What This Script Does
1. **Initializes the SDK:** Uses the official `@openrouter/sdk` client.
2. **Streams Output:** Utilizes `stream: true` to get instant responses in real-time.
3. **Retrieves Reasoning Tokens:** Reasoning models (like `deepseek-r1` or `o1`/`o3-mini`) output raw reasoning tokens before their actual final response. 
   - OpenRouter includes this usage data (`chunk.usage.reasoningTokens`) in the **final chunk** of the stream.
   - The script logs these usage statistics once the stream is complete.
