import { Link } from "react-router-dom";
import type { FilterType } from "../../../store/usePromptStore";


type SidebarProps = {
  onClose?: () => void;
  setFilter?: (filter: FilterType) => void;
};

const Sidebar = ({ onClose, setFilter }: SidebarProps) => {
  return (
    <div className="w-64 surface surface-border border-r p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">AI Manager</h2>

      <nav className="flex flex-col gap-3">
        <Link
          to="/"
          className="text-[color:var(--text)] hover:text-[color:var(--accent)]"
          onClick={() => {
            setFilter?.("all");
            onClose?.();
          }}
        >
          🏠 Home
        </Link>

        <Link
          to="/chat"
          className="text-[color:var(--text)] hover:text-[color:var(--accent)]"
          onClick={() => onClose?.()}
        >
          💬 AI Chat
        </Link>

        <button
          className="text-left text-[color:var(--text)] hover:text-[color:var(--accent)]"
          onClick={() => {
            setFilter?.("favorites");
            onClose?.();
          }}
        >
          ⭐ Favorites
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;