import type { Metadata } from "next";
import Header from "@/components/HeaderFooter/Header";
import { Poppins, Londrina_Solid } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-brasileira",
});

export const metadata: Metadata = {
  title: "BXCOMP 2026 — Brasilidades",
  description: "Site oficial do BXCOMP 2026, o Campeonato de Programação para Calouros do Curso de Sistemas de Informação da EACH-USP, organizado pelo PET-SI. Edição 2026: Brasilidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${londrinaSolid.variable} ${poppins.className}`}>{children}</body>
    </html>
  );
}
