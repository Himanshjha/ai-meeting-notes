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
    <main className="container">
      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700">
            MeetWise – AI Meeting Notes
          </h1>
          <p className="text-gray-600 mt-2">
            Upload, summarize, edit & share meeting notes effortlessly.
          </p>
        </div>

        {/* Components */}
        <FileUpload onUpload={setTranscript} />
        <PromptInput transcript={transcript} setSummary={setSummary} />
        <SummaryEditor summary={summary} setSummary={setSummary} />
        <ShareForm summary={summary} />
      </div>
    </main>
  );
}

