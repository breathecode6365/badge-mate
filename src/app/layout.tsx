import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import AOSProvider from "@/components/AOSProvider";
import Head from "next/head";
import { Link } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BadgeMate",
  description: "Streamline Your Credentialing Proces. BadgeMate offers a comprehensive suite of features to simplify your digital badge management and empower your organization, learners, and partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/small-logo-white.svg" />
      </head>
      <body className={inter.className}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
