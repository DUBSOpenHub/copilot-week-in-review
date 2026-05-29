import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "📅 Copilot Week in Review — your week, written for you",
  description:
    "A GitHub Copilot agent that turns messy weekly notes or raw GitHub activity into a polished, audience-tuned, GitHub-issue-ready status update. In the GitHub Copilot app or the CLI.",
  openGraph: {
    title: "📅 Copilot Week in Review",
    description:
      "Your week, written for you. A GitHub Copilot agent that turns messy notes or GitHub activity into a polished status update — in the Copilot app or CLI.",
    url: "https://dubsopenhub.github.io/copilot-week-in-review/",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Ctext%20y='.9em'%20font-size='90'%3E%F0%9F%93%85%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
