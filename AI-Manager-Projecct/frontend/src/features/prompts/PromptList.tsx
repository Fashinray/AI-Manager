import { usePromptStore } from "../../store/usePromptStore";
import PromptCard from "./PromptCard";


const PromptList = () => {
  const { prompts, search, filter } = usePromptStore();

  const filtered = prompts
    .filter((p) => {
      if (filter === "favorites") return p.isFavorite;
      if (filter === "all") return true;
      return p.category.toLowerCase() === filter;
    })
    .filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {filtered.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

export default PromptList;