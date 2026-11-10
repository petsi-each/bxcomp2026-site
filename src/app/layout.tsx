import type { Metadata } from "next";
import { Poppins, Londrina_Solid } from "next/font/google";
import JsonLd from "@/components/Seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
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

const DESCRICAO_PADRAO =
  "Site oficial do BXCOMP 2026, o Campeonato de Programação para Calouros do Curso de Sistemas de Informação da EACH-USP, organizado pelo PET-SI. Edição 2026: Brasilidades.";

export const metadata: Metadata = {
  // Faz o Next gerar URLs absolutas (canonical, Open Graph, imagens).
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BXCOMP 2026 | Campeonato de Programação para Calouros da EACH-USP",
    // Cada página define só o seu título curto; o sufixo é adicionado aqui.
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRICAO_PADRAO,
  applicationName: SITE_NAME,
  // O canonical NÃO é definido aqui: ele é herdado por todas as páginas e
  // apontaria tudo para a home. Cada página define o seu em pageMetadata().
  openGraph: {
    title: "BXCOMP 2026 | Campeonato de Programação para Calouros da EACH-USP",
    description: DESCRICAO_PADRAO,
    url: "/",
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "O4SmGAeUBYwWQxYFTkg4Sdimhm0mggHmnZ0HfsFVjLo"
  },
};

const organizacaoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organizacao`,
  name: "PET-SI EACH-USP",
  alternateName: "Programa de Educação Tutorial – Sistemas de Informação",
  logo: `${SITE_URL}/images/pet-logo.png`,
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Escola de Artes, Ciências e Humanidades da Universidade de São Paulo (EACH-USP)",
  },
  sameAs: [
    "https://www.facebook.com/petsieach",
    "https://www.instagram.com/petsieach/",
    "https://www.linkedin.com/company/pet-si-each-usp/",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#site`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DESCRICAO_PADRAO,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#organizacao` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${londrinaSolid.variable} ${poppins.className}`}>
        <JsonLd data={organizacaoJsonLd} />
        <JsonLd data={siteJsonLd} />
        {children}
      </body>
    </html>
  );
}
