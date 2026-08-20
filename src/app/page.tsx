import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import MainTitle from '../components/MainTitle/MainTitle';
import Ranking from "../components/Ranking/Ranking"
import e from "../data/equipes.json"
import "./globals.css";
import EtapasSection from '@/components/Etapas/EtapasSection';
import Patrocinadores from '@/components/Patrocinadores/Patrocinadores';
import Equipes from '@/components/Equipes/Equipes';

export default function Home() {
  return (
    <div className="page w-full">
      <Header />
      <MainTitle></MainTitle>
      <EtapasSection></EtapasSection>
      <Equipes equipes={e}></Equipes>
      <Ranking equipes={e} displayQuantity={4}></Ranking>
      <Patrocinadores></Patrocinadores>
      <Footer />
    </div>
  );
}
