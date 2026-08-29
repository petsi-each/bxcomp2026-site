import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const BotoIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
                d="M6 30 C6 20, 16 14, 26 16 C31 17, 33 13, 38 12 C36 16, 36 19, 38 21 C33 23, 31 27, 27 28 C24 33, 16 36, 8 33 Z"
                stroke={cor}
                strokeWidth="2.6"
                fill="none"
                strokeLinejoin="round"
            />
            <circle cx="24" cy="20" r="1.6" fill={cor} />
            <path d="M10 33 C9 36, 6 37, 4 36 C6 35, 7 33.5, 7.5 31.5" stroke={cor} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
    );
};

export default BotoIcon;
