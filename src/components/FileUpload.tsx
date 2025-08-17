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
    <div>
    <label className="block font-medium">Upload Transcript</label>
    <input type="file" accept=".txt,.md" onChange={handleFile} />
    </div>
);
}
