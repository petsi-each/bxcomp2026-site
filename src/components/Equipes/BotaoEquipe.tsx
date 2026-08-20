'use client'

import Image from 'next/image';
import { MouseEventHandler } from "react";

interface ObjEquipe {
    nome: string;
    membros: string[];
    pontos: number[];
    iconPath: string;
}

interface BotaoEquipeProps {
    equipe: ObjEquipe,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEquipe(props: BotaoEquipeProps) {
    return (

        <button aria-label={`mostrar equipe ${props.equipe.nome}`} onClick={props.onClick} className={`flex flex-col w-[7.5rem] h-[7.5rem] bg-white items-center justify-center rounded-[22%] border-azulelegante hover:scale-110 transition-transform ${props.selecionado ? 'border-4 scale-110' : 'border-2'}`}>
            <div className="relative m-2 w-20 h-16">
                <Image className="object-contain" src={props.equipe.iconPath} fill={true} alt="" unoptimized></Image>
            </div>
            <p className="w-[5.5rem] truncate text-[0.95rem] text-center text-preto p-1 font-roboto"> {props.equipe.nome} </p>
        </button>

    );
}
