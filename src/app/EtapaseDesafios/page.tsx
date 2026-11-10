'use client';
import CabecalhoEtapa from "@/components/Etapas/CabecalhoEtapa";
import ConjuntoCards from "../../components/Etapas/ConjuntoCards";
import BarraBotoes from "@/components/Etapas/BarraBotoes";
import etapasData from '@/data/etapas.json';
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/HeaderFooter/Footer";
import Header from "@/components/HeaderFooter/Header";

const EtapasEDesafios = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)

    return (
        <div className="page">
            <Header></Header>

            <div id="EtapasPage" className="flex w-full flex-col justify-center gap-4 px-7 mt-[4rem] md:px-20 pb-24 bg-transparent">
                <h1 className="text-5xl py-9 font-brasileira font-black gradiente-fixo">
                    Etapas & Desafios
                </h1>

                <div className="bg-gradient-to-br from-verdescuro2 to-verdescuro rounded-card p-6 md:p-10 shadow-soft">
                    <div className="flex flex-row justify-between mb-[10px] min-h-[9rem]">
                        <CabecalhoEtapa
                            etapas={etapasData}
                            idSelecionado={idSelecionado}
                        />
                    </div>

                    <BarraBotoes
                        etapas={etapasData}
                        idSelecionado={idSelecionado}
                        setIdSelecionado={setIdSelecionado}
                    />

                    <div className="flex justify-between items-center m-[auto] w-[90%] h-[2px] bg-ouro mt-10">
                        <div className="w-[14px] h-[14px] rounded-full bg-ouro"></div>
                        <div className="w-[14px] h-[14px] rounded-full bg-ouro"></div>
                        <div className="w-[14px] h-[14px] rounded-full bg-ouro"></div>
                        <div className="w-[14px] h-[14px] rounded-full bg-ouro"></div>
                        <div className="w-[14px] h-[14px] rounded-full bg-ouro"></div>
                    </div>

                    <ConjuntoCards
                        etapas={etapasData}
                        idSelecionado={idSelecionado}
                    />
                </div>

                {/* Resumo em texto de todas as etapas: o seletor acima só renderiza uma etapa por vez. */}
                <section className="mt-12 text-left max-w-[60rem]">
                    <h2 className="font-eloquent font-extrabold text-3xl text-creme mb-4">
                        Resumo das etapas do BXCOMP 2026
                    </h2>
                    <p className="font-roboto text-base md:text-lg text-bege leading-relaxed mb-8">
                        O campeonato tem cinco etapas presenciais, cada uma com cinco desafios de programação para
                        resolver em duas horas, em linguagem C. Cada desafio vale de 2 a 6 pontos, e os pontos se
                        acumulam no <Link href="/RankingeGrupos" className="underline decoration-laranja underline-offset-4 hover:text-laranja">ranking</Link>.
                        Para cada desafio listado abaixo há enunciado em PDF, arquivos de entrada e saída e o gabarito, nos
                        cartões da etapa correspondente. As regras completas estão no{" "}
                        <Link href="/Regulamento" className="underline decoration-laranja underline-offset-4 hover:text-laranja">regulamento</Link>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {etapasData.map((etapa) => (
                            <article key={etapa.etapaIndice} className="bg-verdescuro2/40 border border-bege/10 rounded-card p-6">
                                <h3 className="font-eloquent font-extrabold text-xl text-creme mb-2">
                                    Etapa {etapa.etapaIndice} - {etapa.tema}
                                </h3>
                                <p className="font-roboto text-sm md:text-base text-bege leading-relaxed mb-4">
                                    {etapa.descricao}
                                </p>
                                <ul className="font-roboto text-sm md:text-base text-bege list-disc pl-5 space-y-1">
                                    {etapa.desafios.map((desafio) => (
                                        <li key={desafio.desafio}>{desafio.desafio}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default EtapasEDesafios;
