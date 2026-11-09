import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alberto S. Payabyab | Software Developer",
  description: "Full-stack developer building payment systems on Elixir, Next.js and AWS, with QA and security experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
