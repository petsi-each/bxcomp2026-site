import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const BotoIcon: React.FC<IconProps> = ({ selecionado }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <img src="/iconesEtapas/boto.png" alt="Boto" className="w-full h-full" />
    );
};

export default BotoIcone;