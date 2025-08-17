"use client";

import FileUpload from "@/components/FileUpload";
import PromptInput from "@/components/PromptInput";
import SummaryEditor from "@/components/SummaryEditor";
import ShareForm from "@/components/ShareForm";
import { useState } from "react";

export default function Home() {
const [transcript, setTranscript] = useState("");
const [summary, setSummary] = useState("");

return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
    <h1 className="text-2xl font-bold">AI Meeting Notes</h1>
    <h2 className="text-xl font-semibold mt-4">
  Summarize, edit, and share your meetings effortlessly.
</h2>

    
    <FileUpload onUpload={setTranscript} />
    <PromptInput transcript={transcript} setSummary={setSummary} />
    <SummaryEditor summary={summary} setSummary={setSummary} />
    <ShareForm summary={summary} />
    </main>
);
}
