'use client'

import { MouseEventHandler } from "react";
import { Etapa } from '@/components/Etapas/EtapasInterfaces';

import PandeiroIcon from './svgComponents/pandeiroIcon';
import CordelIcon from './svgComponents/cordelIcon';
import FutebolIcon from './svgComponents/futebolIcon';
import FestaJuninaIcon from './svgComponents/festaJuninaIcon';
import BotoIcon from './svgComponents/botoIcon';
import QuestionMark from "./svgComponents/questionMark";

const iconMap: Record<string, React.FC<{ etapa: Etapa; selecionado: boolean }>> = {
    'pandeiroIcon.tsx': PandeiroIcon,
    'cordelIcon.tsx': CordelIcon,
    'futebolIcon.tsx': FutebolIcon,
    'festaJuninaIcon.tsx': FestaJuninaIcon,
    'botoIcon.tsx': BotoIcon,
}

interface BotaoEtapaProps {
    etapa: Etapa,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEtapa(props: BotaoEtapaProps) {
    const IconComponent = iconMap[props.etapa.iconName] || (() => <span />);

    return (
        <button
            aria-label={`mostrar etapa ${props.etapa.etapaIndice}`}
            disabled={props.etapa.estaLiberada == false}
            onClick={props.onClick}
            className="flex-1 min-w-[64px] flex flex-col items-center gap-2 justify-end py-2 px-1 disabled:cursor-not-allowed"
        >
            <div className={`flex flex-col items-center h-[35px] w-[35px] md:h-[4vw] md:w-[4vw] transition-transform duration-300 ${props.selecionado ? "scale-125 opacity-100" : "scale-100 opacity-50 hover:opacity-90"}`}>
                {
                    props.etapa.estaLiberada == false ?
                        <QuestionMark />
                        :
                        <IconComponent
                            etapa={props.etapa}
                            selecionado={props.selecionado}
                        />
                }
            </div>
            <span className="font-subtitulo text-[0.65rem] md:text-xs text-branco text-center leading-tight">
                {props.etapa.tema}
            </span>
        </button>
    );
}
