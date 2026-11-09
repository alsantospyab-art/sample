import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alberto S. Payabyab | Software Developer",
  description: "Full-stack developer with AWS, QA and security experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
