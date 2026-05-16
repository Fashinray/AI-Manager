const BASE_URL = "http://localhost:5000/api";

export async function improvePrompt(prompt: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/improve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  return (await res.json()).result;
}

export async function explainPrompt(prompt: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/explain`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  return (await res.json()).result;
}

export async function detectCategory(prompt: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/category`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return (await res.json()).result;
}

export async function chatAssistant(message: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return (await res.json()).result;
}