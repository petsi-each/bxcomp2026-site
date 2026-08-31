import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    selecionado: boolean;
}

const PandeiroIcone: React.FC<IconProps> = () => {
    return (
        <img src="/iconesEtapas/pandeiro.png" alt="Pandeiro" className="w-full h-full" />
    );
};

export default PandeiroIcone;