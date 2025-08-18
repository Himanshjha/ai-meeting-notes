"use client";
import { useState } from "react";

type Props = {
  transcript: string;
  setSummary: (s: string) => void;
};

export default function PromptInput({ transcript, setSummary }: Props) {
  const [prompt, setPrompt] = useState("Summarize this meeting clearly.");

  const generateSummary = async () => {
    const res = await fetch("/api/summarize", {
      method: "POST",
      body: JSON.stringify({ transcript, prompt }),
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <div className="space-y-2">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={generateSummary}
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition"
      >
        Generate Summary
      </button>
    </div>
  );
}
