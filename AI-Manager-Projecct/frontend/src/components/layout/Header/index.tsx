import { usePromptStore } from "../../../store/usePromptStore";

type HeaderProps = {
  onCreatePrompt: () => void;
};

const Header = ({ onCreatePrompt }: HeaderProps) => {
  const setSearch = usePromptStore((state) => state.setSearch);
  const theme = usePromptStore((state) => state.theme);
  const toggleTheme = usePromptStore((state) => state.toggleTheme);

  return (
    <header className="flex items-center justify-between surface surface-border px-6 py-4 border-b">
      <input
        type="text"
        placeholder="Search prompts..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2 px-4 py-2 input-theme border rounded-lg"
      />

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="accent-btn px-4 py-2 rounded-lg text-sm font-medium"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <button
          onClick={onCreatePrompt}
          className="accent-btn px-4 py-2 rounded-lg text-sm font-medium"
        >
          + New Prompt
        </button>
      </div>
    </header>
  );
};

export default Header;