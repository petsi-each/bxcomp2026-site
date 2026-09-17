'use client';
import { useState } from 'react';
import Link from 'next/link';
import CabecalhoEtapa from "../../components/Etapas/CabecalhoEtapa";
import BarraBotoes from "@/components/Etapas/BarraBotoes";
import etapasData from '@/data/etapas.json';

const EtapasSection = () => {
    const [idSelecionado, setIdSelecionado] = useState(0)
    return (
        <div id="EtapasSection" className="w-full flex flex-col justify-center gap-4 px-7 py-[3rem] md:px-20 bg-verdescuro">
            <div id="Cabecalho" className="mb-[40px]">
                <h1 className="block font-cinzel_decorative text-[3.2rem] font-black text-ouro">
                    Etapas
                </h1>
                <p className="inline-block md:w-[26rem] mt-[10px] font-roboto font-medium text-base text-amarelo">
                    Estude ao rever os temas, desafios e resoluções já apresentadas nesta edição do BXCOMP!
                </p>
            </div>

            <div className="bg-gradient-to-br from-verdescuro2 to-verdescuro rounded-card p-6 md:p-10 shadow-soft">
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

                <div className="flex flex-col md:flex-row justify-between mt-[50px] gap-8">
                    <CabecalhoEtapa
                        etapas={etapasData}
                        idSelecionado={idSelecionado}
                    />

                    <div id="VerDesafios" className="flex my-4 md:my-8 justify-center items-center">
                        <Link href="/EtapaseDesafios">
                            <button className="text-white border-2 bg-azul border-azul rounded-[1.5rem] px-[2.5rem] py-[1.1rem] font-subtitulo font-bold hover:bg-creme hover:text-azul hover:border-creme transition duration-300">
                                Ver desafios
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default EtapasSection;
