import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaiah Oladimeji | Systems, AI, QA, Automation",
  description:
    "Portfolio for Isaiah Oladimeji, a systems builder focused on AI-assisted workflows, analytics, QA, testing, and reliable software delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
