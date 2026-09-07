import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Samir | AI Automation Portfolio",
  description:
    "AI Automation portfolio showcasing n8n and AI-powered automation projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
