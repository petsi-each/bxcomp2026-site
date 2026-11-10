import type { Metadata } from "next";
import Link from "next/link";
import Equipes from "@/components/Equipes/Equipes";
import Footer from "../../components/HeaderFooter/Footer";
import Ranking from "../../components/Ranking/Ranking";
import e from "../../data/equipes.json"
import Header from "@/components/HeaderFooter/Header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Ranking e equipes participantes",
    description:
        "Classificação geral do BXCOMP 2026 com a pontuação de cada equipe em cada etapa, além da lista das equipes e dos seus integrantes.",
    path: "/RankingeGrupos",
});

const somar = (pontos: number[]) => pontos.reduce((acc, p) => acc + p, 0);

const RankingeGrupos = () => {
    // Mesma ordenação do componente Ranking: maior pontuação total primeiro.
    const classificacao = [...e].sort((a, b) => somar(b.pontos) - somar(a.pontos));
    const totais = classificacao.map((equipe) => somar(equipe.pontos));
    // Equipes empatadas na pontuação dividem a mesma posição.
    const posicoes = totais.map((total) => totais.indexOf(total) + 1);
    const numEtapas = Math.max(...e.map((equipe) => equipe.pontos.length));

    return (
        <div className="page">
            <div className="pt-14">
                <Header></Header>
                {/* Os blocos visuais abaixo têm títulos "Equipes" e "Ranking" (h2); este é o título da página. */}
                <h1 className="sr-only">Ranking e equipes do BXCOMP 2026</h1>
                <Equipes equipes={e}></Equipes>
                <Ranking equipes={e}></Ranking>

                <section className="px-8 sm:px-20 pt-8 pb-16 text-left">
                    <h2 className="font-eloquent font-extrabold text-3xl md:text-4xl text-creme mb-4">
                        Pontuação por etapa
                    </h2>
                    <p className="font-roboto text-base md:text-lg text-bege leading-relaxed max-w-[50rem] mb-6">
                        Classificação das {e.length} equipes do BXCOMP 2026. Em cada etapa há cinco desafios com
                        pontuação definida de antemão; a equipe recebe os pontos dos desafios que resolveu
                        corretamente, e a primeira a resolver cada desafio ganha um ponto de bonificação. Os critérios de
                        desempate estão no{" "}
                        <Link href="/Regulamento" className="underline decoration-laranja underline-offset-4 hover:text-laranja">regulamento</Link>
                        , e os problemas de cada etapa em{" "}
                        <Link href="/EtapaseDesafios" className="underline decoration-laranja underline-offset-4 hover:text-laranja">Etapas &amp; Desafios</Link>.
                    </p>

                    <div className="overflow-x-auto rounded-card border border-bege/10">
                        <table className="w-full min-w-[640px] text-left font-roboto text-sm md:text-base text-bege">
                            <caption className="sr-only">Pontuação de cada equipe por etapa e total do BXCOMP 2026</caption>
                            <thead className="bg-verdescuro2/60 text-laranja">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold">Pos.</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Equipe</th>
                                    {Array.from({ length: numEtapas }, (_, i) => (
                                        <th key={i} scope="col" className="px-4 py-3 font-bold text-right">Etapa {i}</th>
                                    ))}
                                    <th scope="col" className="px-4 py-3 font-bold text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classificacao.map((equipe, idx) => (
                                    <tr key={equipe.nome} className="border-t border-bege/10">
                                        <td className="px-4 py-2">{posicoes[idx]}º</td>
                                        <th scope="row" className="px-4 py-2 font-medium text-creme">{equipe.nome}</th>
                                        {Array.from({ length: numEtapas }, (_, i) => (
                                            <td key={i} className="px-4 py-2 text-right">{equipe.pontos[i] ?? 0}</td>
                                        ))}
                                        <td className="px-4 py-2 text-right font-bold text-creme">{totais[idx]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default RankingeGrupos;
