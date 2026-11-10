import type { Metadata } from 'next';
import Footer from '../components/HeaderFooter/Footer';
import MainTitle from '../components/MainTitle/MainTitle';
import Ranking from "../components/Ranking/Ranking"
import e from "../data/equipes.json"
import EtapasSection from '@/components/Etapas/EtapasSection';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Equipes from '@/components/Equipes/Equipes';
import Header from '@/components/HeaderFooter/Header';
import JsonLd from '@/components/Seo/JsonLd';
import { SITE_URL } from '@/lib/seo';

// Título, descrição e Open Graph da home vêm do layout; aqui só o canonical.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Datas e local conforme o regulamento 2026 (datas "sujeitas a alterações"): ajuste aqui se mudarem.
const eventoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "BXCOMP 2026 – XVI Campeonato de Programação para Calouros de Sistemas de Informação",
  description:
    "Campeonato de programação para calouros do curso de Sistemas de Informação da EACH-USP, organizado pelo PET-SI. Cinco etapas presenciais com desafios de lógica e programação em C, no tema Brasilidades.",
  startDate: "2026-09-04T15:00:00-03:00",
  endDate: "2026-10-09T17:00:00-03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  inLanguage: "pt-BR",
  url: SITE_URL,
  image: [`${SITE_URL}/images/logo-bx.png`],
  location: {
    "@type": "Place",
    name: "EACH-USP – Laboratório 06 do Ciclo Básico",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Arlindo Béttio, 1000",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "03828-000",
      addressCountry: "BR",
    },
  },
  organizer: { "@id": `${SITE_URL}/#organizacao` },
};

export default function Home() {
  return (
    <div className="page w-full">
      <JsonLd data={eventoJsonLd} />
      <Header></Header>
      <MainTitle></MainTitle>
      <EtapasSection></EtapasSection>
      <Equipes equipes={e}></Equipes>
      <Ranking equipes={e} displayQuantity={4}></Ranking>
      <Patrocinadores></Patrocinadores>
      <Footer />
    </div>
  );
}
