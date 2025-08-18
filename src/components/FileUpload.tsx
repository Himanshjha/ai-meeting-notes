"use client";

type Props = { onUpload: (text: string) => void };

export default function FileUpload({ onUpload }: Props) {
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    onUpload(text);
  };

  return (
    <div className="space-y-2">
      <label className="block font-semibold text-gray-700">Upload Transcript</label>
      <input
        type="file"
        accept=".txt,.md"
        onChange={handleFile}
        className="w-full p-2 border rounded-lg cursor-pointer focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}
