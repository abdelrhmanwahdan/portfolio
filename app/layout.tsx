import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdelrhman Wahdan — AI Supervisor & MLOps Architect",
  description:
    "AI Supervisor & MLOps Architect at Valify Solutions | LangChain/LangGraph Agents | Computer Vision | University Instructor at Woolf | Open to Consulting",
  keywords: [
    "AI Supervisor",
    "Machine Learning Engineer",
    "MLOps",
    "Computer Vision",
    "NLP",
    "Deep Learning",
    "Cairo Egypt",
  ],
  openGraph: {
    title: "Abdelrhman Wahdan — AI Supervisor & ML Engineer",
    description: "AI Supervisor leading a team of 12 engineers at Valify Solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
