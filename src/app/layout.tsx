import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

// Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Poppins Bold
const poppinsBold = Poppins({
  variable: "--font-poppins-bold",
  weight: "700", // ⬅️ Peso bold
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindDesk",
  description:
    "A próxima geração em suporte inteligente. Simplifique, automatize e resolva com o poder do MindDesk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppinsBold.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
