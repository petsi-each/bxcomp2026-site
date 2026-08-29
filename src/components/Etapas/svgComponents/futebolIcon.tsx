import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const FutebolIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="19" stroke={cor} strokeWidth="3" fill="none" />
            <polygon points="24,15 30,19.5 27.7,26.5 20.3,26.5 18,19.5" fill={cor} />
            <path d="M24,15 L30,19.5 M24,15 L18,19.5 M20.3,26.5 L15,31 M27.7,26.5 L33,31 M20.3,26.5 L24,33 M27.7,26.5 L24,33" stroke={cor} strokeWidth="1.6" fill="none" />
        </svg>
    );
};

export default FutebolIcon;
