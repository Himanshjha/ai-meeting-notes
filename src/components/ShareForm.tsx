"use client";

import { useState } from "react";

type Props = { summary: string };

export default function ShareForm({ summary }: Props) {
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ email, summary }),
    });
    const data = await res.json();
    alert(data.success ? "✅ Email sent!" : "❌ Failed to send email");
  };

  return (
    <div className="space-y-2">
      <label className="block font-semibold text-gray-700">Email to share:</label>
      <div className="flex space-x-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={sendEmail}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

