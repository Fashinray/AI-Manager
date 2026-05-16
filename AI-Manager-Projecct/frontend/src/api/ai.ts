const BASE_URL = "http://localhost:5000/api";

export async function improvePrompt(prompt: string) {
  const res = await fetch(`${BASE_URL}/improve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.result;
}

export async function explainPrompt(prompt: string) {
  const res = await fetch(`${BASE_URL}/explain`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.result;
}

export async function categorizePrompt(prompt: string) {
  const res = await fetch(`${BASE_URL}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.result;
}

export async function chatWithAI(message: string) {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return data.result;
}