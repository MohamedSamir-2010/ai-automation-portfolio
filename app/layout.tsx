import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mohamed Samir | AI Automation Portfolio",
  description:
    "AI Automation portfolio showcasing n8n and AI-powered automation projects.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
