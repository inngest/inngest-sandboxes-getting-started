import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inngest Sandboxes Getting Started",
  description: "Run code safely in an isolated Sandbox from an Inngest function.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
