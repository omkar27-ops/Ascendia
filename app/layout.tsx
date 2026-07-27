import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascendia | Premium Digital Marketing & Creative Growth Agency",
  description: "Ascendia - Premium Digital Marketing & Creative Growth Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased dark`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-primary selection:bg-brand-azure/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
