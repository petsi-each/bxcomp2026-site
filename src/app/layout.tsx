import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/HeaderFooter/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
