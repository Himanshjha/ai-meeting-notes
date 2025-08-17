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
<div>
<textarea
value={prompt}
onChange={(e) => setPrompt(e.target.value)}
className="w-full p-2 border rounded"
/>
<button onClick={generateSummary} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
Generate Summary
</button>
</div>
);
}
