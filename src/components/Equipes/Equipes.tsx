'use client'

import Image from 'next/image';
import { useState } from "react"
import BotaoEquipe from './BotaoEquipe';

export interface Equipe {
    nome: string,
    membros: string[],
    pontos: number[],
    iconPath: string
}

interface EquipesProps {
    equipes: Equipe[]
}

const Equipes: React.FC<EquipesProps> = ({ equipes }) => {

    const [idSelecionado, setIdSelecionado] = useState(0)

    const scrolltodisplayer = () => {
        const displayer = document.getElementById('display');
        if (displayer && window.innerWidth <= 1100) {
            displayer.scrollIntoView({ behavior: 'smooth', block: 'center', });
        }
    }

    return (
        <section className='pb-[7rem] pt-[7rem] bg-creme'>

            <h1 className="text-azulescuro font-eloquent font-extrabold text-[3.2rem] pl-8 sm:pl-20"> Equipes </h1>
            <p className="p-4 font-roboto text-md text-left text-preto pl-20"> Conheça os competidores deste ano! </p>

            {equipes.length === 0 ? (
                <div className="mx-8 sm:mx-20 mt-6 px-8 py-14 text-center border border-dashed border-azulelegante/40 rounded-card">
                    <strong className="block font-eloquent text-azulelegante text-2xl mb-2">Inscrições em breve</strong>
                    <p className="font-roboto text-preto/80 max-w-[520px] mx-auto">
                        As equipes participantes do BXCOMP 2026 aparecerão aqui assim que o período de inscrições for encerrado.
                    </p>
                </div>
            ) : (
                <section className="flex justify-center [@media(max-width:1100px)]:flex-col">

                    <section className="[@media(max-width:1100px)]:w-full w-[50vw] my-4 md:my-2 py-2 px-[15px] flex flex-wrap items-center justify-center content-start">
                        <section className="gap-8 sm:grid-flow-col flex sm:h-fit flex-wrap items-center justify-center">
                            {equipes.map((equipe, idx) => {
                                return <BotaoEquipe
                                    key={idx}
                                    equipe={equipe}
                                    selecionado={idSelecionado == idx}
                                    onClick={() => { setIdSelecionado(idx); scrolltodisplayer(); }} />
                            })
                            }

                        </section>
                    </section>

                    <section id="display" className="overflow-hidden [@media(max-width:1100px)]:mt-[60px] [@media(max-width:1100px)]:w-full w-[50vw] px-4 flex flex-col items-center content-center justify-center">

                        <div className="flex flex-col items-center justify-center rounded-card p-10 [background:linear-gradient(155deg,var(--azulelegante),var(--azulescuro))] shadow-soft w-full max-w-[380px]">
                            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center p-5 shadow-soft mb-5">
                                <Image className="w-full h-full object-contain" alt="" width={110} height={110} src={equipes[idSelecionado].iconPath} unoptimized />
                            </div>

                            <p className="font-subtitulo font-bold text-laranja mb-1">
                                {equipes[idSelecionado].pontos.reduce((a, b) => a + b, 0)} {equipes[idSelecionado].pontos.reduce((a, b) => a + b, 0) === 1 ? "ponto" : "pontos"}
                            </p>
                            <h2 className="text-center font-eloquent font-extrabold text-2xl text-white mb-3 truncate w-full">
                                {equipes[idSelecionado].nome}
                            </h2>
                            <div className="text-center font-roboto text-sm text-white/90 flex flex-col gap-1">
                                {equipes[idSelecionado].membros.map((membro, idx) => (
                                    <p key={idx} className="truncate w-full">{membro}</p>
                                ))}
                            </div>
                        </div>
                    </section>

                </section>
            )}
        </section>
    );

}

export default Equipes;
