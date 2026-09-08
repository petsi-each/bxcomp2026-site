import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const FestaJuninaIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <img src="/iconesEtapas/festaJunina.png" alt="Festa Junina" className="w-full h-full" />
    );
};

export default FestaJuninaIcone;