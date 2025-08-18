"use client";

type Props = {
  summary: string;
  setSummary: (s: string) => void;
};

export default function SummaryEditor({ summary, setSummary }: Props) {
  return (
    <div className="space-y-2">
      <label className="block font-semibold text-gray-700">Editable Summary</label>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full h-40 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

