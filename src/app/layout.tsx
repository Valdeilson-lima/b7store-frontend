import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B7Store",
  description:
    "B7Store é uma loja de camisetas e kits de produtos geek, com foco em qualidade e design exclusivo. Explore nossa coleção e encontre o item perfeito para expressar seu estilo único.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
