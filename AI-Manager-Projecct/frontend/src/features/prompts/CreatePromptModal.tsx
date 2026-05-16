import { useState } from "react";
import { usePromptStore } from "../../store/usePromptStore";
import Button from "../../components/ui/Button";


type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreatePromptModal = ({ isOpen, onClose }: Props) => {
  const addPrompt = usePromptStore((state) => state.addPrompt);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Coding");
  const [tags, setTags] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title || !description) return;

    addPrompt({
      id: Date.now().toString(),
      title,
      description,
      category,
      tags: tags.split(",").map((t) => t.trim()),
      isFavorite: false,
    });

    // reset form
    setTitle("");
    setDescription("");
    setCategory("Coding");
    setTags("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="surface card-theme w-full max-w-lg rounded-xl p-6 border">
        <h2 className="text-xl font-semibold mb-4">New Prompt</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg input-theme"
        />

        <textarea
          placeholder="Prompt description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg input-theme"
          rows={4}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg input-theme"
        >
          <option>Coding</option>
          <option>Writing</option>
          <option>Marketing</option>
          <option>Design</option>
        </select>

        <select
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg input-theme"
        >
          <option>Novice (0-1 years)</option>
          <option>Intermediate (1-3 years)</option>
          <option>Advanced (3+ years)</option>
        </select>

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePromptModal;