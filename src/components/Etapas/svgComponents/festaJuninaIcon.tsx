import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const FestaJuninaIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M4 10 Q24 4 44 10" stroke={cor} strokeWidth="2" fill="none" />
            <polygon points="9,10 14,10 11.5,17" fill={cor} />
            <polygon points="19,10 24,10 21.5,17" fill={cor} />
            <polygon points="29,10 34,10 31.5,17" fill={cor} />
            <polygon points="39,10 43,10 41,16" fill={cor} />
            <path d="M17 40 C17 33, 21 30, 24 22 C27 30, 31 33, 31 40 Z" fill={cor} opacity="0.85" />
            <path d="M13 40 h22" stroke={cor} strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
};

export default FestaJuninaIcon;
