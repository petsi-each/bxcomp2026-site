import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface IconProps {
    etapa: Etapa;
    tema: string;
    selecionado: boolean;
}

const PandeiroIcon: React.FC<IconProps> = ({ selecionado, tema }) => {
    return (
        <div className="flex flex-col items-center justify-end w-full h-full gap-2">
            <img 
                src="/iconesEtapas/pandeiro.png" 
                alt={tema} 
                className="max-h-20 object-contain"
            />
            <span className={`hidden min-[500px]:block font-subtitulo text-xs md:text-sm text-center leading-tight transition-colors ${
                selecionado ? "text-ouro font-semibold" : "text-bege"
            }`}>
                {tema}
            </span>
        </div>
    );
};

export default PandeiroIcon;