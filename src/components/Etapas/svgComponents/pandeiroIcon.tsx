import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const PandeiroIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <img src="/iconesEtapas/pandeiro.png" alt="Pandeiro" className="w-full h-full" />
    );
};

export default PandeiroIcone;