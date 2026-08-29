import { Etapa } from "@/components/Etapas/EtapasInterfaces";

interface CabecalhoEtapaProps {
    etapas: Etapa[]
    idSelecionado: number
}

const CabecalhoEtapa: React.FC<CabecalhoEtapaProps> = ({ etapas, idSelecionado }) => {
    const etapa = etapas[idSelecionado];

    return (
        <div id="Cabecalho" className="block max-w-[52vw] [@media(max-width:768px)]:max-w-full">
            <h2 className="text-creme text-[1.4rem] font-eloquent font-extrabold mb-[18px]">
                Etapa {etapa.etapaIndice + 1} — {etapa.tema}
            </h2>
            <p className="inline-block text-bege text-[1.02rem] font-roboto leading-relaxed">
                {etapa.descricao}
            </p>
            {!etapa.estaLiberada && (
                <p className="mt-4 inline-flex items-center gap-2 font-subtitulo text-sm text-bege/80">
                    🔒 Etapa ainda não liberada — fique de olho nas redes do PET-SI!
                </p>
            )}
        </div>
    );
};

export default CabecalhoEtapa;
