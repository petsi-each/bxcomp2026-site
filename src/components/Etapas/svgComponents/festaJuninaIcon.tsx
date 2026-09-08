import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    tema: string;
    selecionado: boolean;
}

const FestaJuninaIcon: React.FC<IconProps> = ({ selecionado, tema }) => {
    const cor = selecionado ? "var(--ouro)" : "var(--bege)";
    return (
        <div className="w-full h-full">
            <img src="/iconesEtapas/festaJunina.png" alt="Festa Junina" />
            <span className="font-subtitulo text-[0.65rem] md:text-xs text-bege text-center leading-tight">
                {tema}
            </span>
        </div>
    );
};

export default FestaJuninaIcon;