import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
title: "AI Meeting Notes",
description: "Summarize meetings with Groq + send via email",
};

export default function RootLayout({ children }: { children: ReactNode }) {
return (
    <html lang="en">
    <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
);
}
