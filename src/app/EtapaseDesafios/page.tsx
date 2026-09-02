'use client';
import CabecalhoEtapa from "@/components/Etapas/CabecalhoEtapa";
import ConjuntoCards from "../../components/Etapas/ConjuntoCards";
import BarraBotoes from "@/components/Etapas/BarraBotoes";
import etapasData from '@/data/etapas.json';
import { useState } from "react";
import Footer from "@/components/HeaderFooter/Footer";
import Header from "@/components/HeaderFooter/Header";

const EtapasEDesafios = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)

    return (
        <div className="page">
            <Header></Header>

            <div id="EtapasPage" className="flex w-full flex-col justify-center gap-4 px-7 mt-20 md:px-20 pb-24 bg-transparent">
                <h1 className="text-5xl py-9 font-brasileira font-black gradiente-titulo drop-shadow-[0_2px_6px_rgba(255,175,48,0.25)]">
                    Etapas & Desafios
                </h1>

                <div className="bg-gradient-to-br from-azulescuro2 to-azulescuro rounded-card p-6 md:p-10 shadow-soft">
                    <div className="flex flex-row justify-between mb-[30px]">
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

                    <div className="flex justify-between items-center m-[auto] w-[95%] h-[2px] bg-ouro mt-6">
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
            </div>

            <Footer></Footer>
        </div>
    );
};

export default EtapasEDesafios;
