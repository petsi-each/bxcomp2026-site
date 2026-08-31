import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const FutebolIcone: React.FC<IconProps> = () => {
    return (
        <img src="/iconesEtapas/futebol.png" alt="Futebol" className="w-full h-full" />
    );
};

export default FutebolIcone;