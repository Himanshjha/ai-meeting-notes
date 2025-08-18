import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "MeetWise – AI Meeting Notes",
  description: "Summarize, edit, and share your meetings effortlessly with AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
