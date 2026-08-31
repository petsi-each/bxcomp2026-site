import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const BotoIcone: React.FC<IconProps> = () => {
    return (
        <img src="/iconesEtapas/boto.png" alt="Boto" className="w-full h-full" />
    );
};

export default BotoIcone;