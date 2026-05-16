// src/store/usePromptStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Prompt = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  isFavorite: boolean;
};

// Define filter types properly
export type FilterType =
  | "all"
  | "favorites"
  | "coding"
  | "writing"
  | "marketing"
  | "design";

export type ThemeMode = "light" | "dark";

export type PromptState = {
  prompts: Prompt[];
  search: string;
  filter: FilterType;
  theme: ThemeMode;

  addPrompt: (prompt: Prompt) => void;
  deletePrompt: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setSearch: (value: string) => void;
  setFilter: (filter: FilterType) => void;
  toggleTheme: () => void;
};

const getDefaultTheme = (): ThemeMode =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const usePromptStore = create<PromptState>()(
  persist(
    (set) => ({
      prompts: [
        {
          id: "1",
          title: "React Component Generator",
          description:
            "Act as a senior React developer. Generate reusable components using TypeScript.",
          category: "Coding",
          tags: ["React", "TypeScript"],
          isFavorite: false,
        },
      ],

      search: "",
      filter: "all", 

      addPrompt: (prompt) =>
        set((state) => ({
          prompts: [prompt, ...state.prompts],
        })),

      deletePrompt: (id) =>
        set((state) => ({
          prompts: state.prompts.filter((p) => p.id !== id),
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          prompts: state.prompts.map((p) =>
            p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
          ),
        })),

      setSearch: (value) => set({ search: value }),

      setFilter: (filter) => set({ filter }),
      theme: getDefaultTheme(),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "prompt-storage",
    }
  )
);