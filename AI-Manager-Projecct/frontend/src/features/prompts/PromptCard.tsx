import { useState } from "react";
import { explainPrompt, improvePrompt } from "../../api/ai";
import { usePromptStore } from "../../store/usePromptStore";
import type { Prompt } from "../../store/usePromptStore";



type PromptCardProps = {
  prompt: Prompt;
  BadgeLabel?: string;
};

const PromptCard = ({ prompt }: PromptCardProps) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const toggleFavorite = usePromptStore((state) => state.toggleFavorite);

  const handleImprove = async () => {
    setLoading(true);
    const res = await improvePrompt(prompt.description);
    setResult(res);
    setLoading(false);
  };

  const handleExplain = async () => {
    setLoading(true);
    const res = await explainPrompt(prompt.description);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="card-theme p-4 rounded-xl shadow hover:shadow-md transition border">
      <h3 className="font-bold text-lg">{prompt.title}</h3>
      <p className="text-sm text-muted mt-1">{prompt.description}</p>

      <div className="mt-2 text-xs text-[color:var(--accent)]">{prompt.category}</div>

      <div className="flex gap-2 mt-3">
         <button
          onClick={() => toggleFavorite(prompt.id)}
          className={`px-3 py-1 rounded ${
            prompt.isFavorite ? "text-yellow-400" : "text-gray-400"
          } hover:text-yellow-500`}
        >
          ★
        </button> 

        <button
          onClick={handleImprove}
          className="accent-btn px-3 py-1 rounded"
        >
          Improve
        </button>

        <button
          onClick={handleExplain}
          className="bg-gray-500 text-white px-3 py-1 rounded"
        >
          Explain
        </button>
      </div>

      {loading && <p className="text-sm mt-2 text-muted">AI thinking...</p>}

      {result && (
        <div className="mt-3 p-2 surface-muted rounded text-sm">
          {result}
        </div>
      )}
    </div>
  );
};

export default PromptCard;