import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kristijan Kosmach – Full-Stack Developer",
  description: "Full-Stack Developer specialized in React, Node.js, Next.js, and AWS. Building scalable applications with 6+ years of experience.",
  keywords: ["Full-Stack Developer", "React", "Node.js", "Next.js", "AWS", "Kristijan Kosmach"],
  authors: [{ name: "Kristijan Kosmach" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
