# LLM Model Recommendations for Vicinity (Free Plans Only)

## Task → Model Matrix

| Task Type                | Recommended Model (Default) | Fallback Model       | Reason                                                                 |
|--------------------------|-----------------------------|----------------------|------------------------------------------------------------------------|
| Client Copywriting       | openrouter/free             | Gemini 1.5           | Better nuance and tone for client-facing content.                      |
| SEO Research             | Gemini 1.5                  | openrouter/free      | Free web access for keyword and trend analysis.                        |
| Code Generation          | openrouter/free             | Gemini 1.5           | Fast and accurate for snippets/templates.                              |
| Image Prompt Engineering | Gemini 1.5                  | openrouter/free      | Strong creative generation for visual concepts.                        |
| Financial Calculations   | Gemini 1.5                  | openrouter/free      | Reliable for math and logic-based tasks.                               |
| General Brainstorming    | openrouter/free             | Gemini 1.5           | Good for ideation and planning.                                        |

## Usage Guidelines
1. **Default to `openrouter/free`** for most tasks unless a specific fallback is better suited.
2. **Use `Gemini 1.5`** when web access or creative image prompting is needed.
3. **Avoid paid models** — strict adherence to free-tier compliance.
4. **Test outputs** — free models may have rate limits or variability; verify results.

## Notes
- OpenCode Zen is not recommended for complex tasks; use only for basic assistance.
- Always check `.env` for API keys before invoking models.