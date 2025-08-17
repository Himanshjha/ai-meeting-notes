"use client";

type Props = {
  summary: string;
  setSummary: (s: string) => void;
};

export default function SummaryEditor({ summary, setSummary }: Props) {
  return (
    <div>
      <label className="block font-medium">Editable Summary</label>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full h-40 p-2 border rounded"
      />
    </div>
  );
}
