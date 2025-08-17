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
    alert(data.success ? "Email sent!" : "Failed to send email");
  };

  return (
    <div>
      <label>Email to share:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="ml-2 p-1 border rounded"
      />
      <button onClick={sendEmail} className="ml-2 px-4 py-1 bg-green-600 text-white rounded">
        Send
      </button>
    </div>
  );
}
