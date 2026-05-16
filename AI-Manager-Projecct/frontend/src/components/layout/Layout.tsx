// src/components/layout/Layout.tsx

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CreatePromptModal from "../../features/prompts/CreatePromptModal";
import { usePromptStore } from "../../store/usePromptStore";

const Layout = () => {
  const theme = usePromptStore((state) => state.theme);
  const setFilter = usePromptStore((state) => state.setFilter);
  const [isCreatePromptOpen, setIsCreatePromptOpen] = useState(false);

  const handleCloseSidebar = () => {
    console.log("Sidebar closed");
  };

  const openCreatePrompt = () => setIsCreatePromptOpen(true);
  const closeCreatePrompt = () => setIsCreatePromptOpen(false);

  return (
    <div className={`flex min-h-screen flex-col app-shell ${theme === "dark" ? "theme-dark" : ""}`}>
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar onClose={handleCloseSidebar} setFilter={setFilter} />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <Header onCreatePrompt={openCreatePrompt} />

          <main className="p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>

      <CreatePromptModal isOpen={isCreatePromptOpen} onClose={closeCreatePrompt} />

      <footer className="surface surface-border border-t px-4 py-2 text-sm text-muted text-center w-full">
        Fashinray, 2026
      </footer>
    </div>
  );
};

export default Layout;