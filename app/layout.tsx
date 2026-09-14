import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Larzus Apps — Produtos digitais simples de verdade",
  description: "Estúdio independente de aplicativos e produtos digitais úteis, simples, bonitos e acessíveis.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
