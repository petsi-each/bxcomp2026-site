import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const CordelIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M6 10 C14 6, 20 6, 24 10 C28 6, 34 6, 42 10 V38 C34 34, 28 34, 24 38 C20 34, 14 34, 6 38 Z" stroke={cor} strokeWidth="3" strokeLinejoin="round" fill="none" />
            <line x1="24" y1="10" x2="24" y2="38" stroke={cor} strokeWidth="2.5" />
            <line x1="11" y1="16" x2="18" y2="14.5" stroke={cor} strokeWidth="2" strokeLinecap="round" />
            <line x1="11" y1="22" x2="18" y2="20.5" stroke={cor} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

export default CordelIcon;
