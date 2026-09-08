import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const FutebolIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <img src="/iconesEtapas/futebol.png" alt="Futebol" className="w-full h-full" />
    );
};

export default FutebolIcone;