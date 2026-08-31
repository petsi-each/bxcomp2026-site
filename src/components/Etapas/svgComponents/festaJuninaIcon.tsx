import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const FestaJuninaIcone: React.FC<IconProps> = () => {
    return (
        <img src="/iconesEtapas/festaJunina.png" alt="Festa Junina" className="w-full h-full" />
    );
};

export default FestaJuninaIcone;