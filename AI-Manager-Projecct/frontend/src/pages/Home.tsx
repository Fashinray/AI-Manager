
import PromptCard from "../features/prompts/PromptCard";
import { usePromptStore } from "../store/usePromptStore";

const Home = () => {
  const { prompts, search, filter } = usePromptStore();

  const filteredPrompts = prompts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "favorites" && p.isFavorite) ||
      p.category.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
      {filteredPrompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

export default Home;