import { DesafioList } from "@/components/Etapas/EtapasInterfaces";

export default function CardDesafios(props: DesafioList) {
    if (!props.desafios || props.desafios.length === 0) {
        return (
            <div className="mx-auto max-w-[480px] text-center px-6 py-10 border border-dashed border-bege/30 rounded-card">
                <strong className="block font-eloquent text-creme text-lg mb-1">Em breve</strong>
                <p className="font-roboto text-sm text-bege/80">
                    Os desafios desta etapa serão publicados aqui assim que a etapa presencial acontecer.
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center w-full gap-4">
                {
                    props.desafios.map((desafioObj, idx) => (
                        <article 
                            key={idx} 
                            className="flex flex-col justify-between p-4 w-[280px] [@media(min-width:420px)]:w-[320px] bg-laranja rounded-xl text-center text-verdescuro2 shadow-soft border-2 border-transparent transition-colors duration-200 hover:border-white/60"
                        >
                            <h2 className="text-lg font-eloquent font-extrabold text-verdescuro2 mb-3 truncate">
                                {desafioObj.desafio}
                            </h2>

                            <div className="flex flex-col gap-2 font-roboto text-xs">
                                {/* Botão Principal: Enunciado */}
                                <a 
                                    href={desafioObj.enunciado} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="w-full bg-verdescuro2 text-white font-subtitulo font-semibold py-1.5 px-3 rounded-full transition-all duration-200 hover:bg-azulelegante flex items-center justify-center gap-1.5"
                                >
                                    📄 Enunciado
                                </a>

                                {/* Grade com arquivos de teste (Entrada e Saída) */}
                                <div className="grid grid-cols-2 gap-1.5">
                                    <a 
                                        href={desafioObj.entrada} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="bg-white/30 text-verdescuro2 font-subtitulo font-medium py-1 px-2 rounded-lg transition-all duration-200 hover:bg-white"
                                    >
                                        📥 Entrada
                                    </a>
                                    <a 
                                        href={desafioObj.saida} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="bg-white/30 text-verdescuro2 font-subtitulo font-medium py-1 px-2 rounded-lg transition-all duration-200 hover:bg-white"
                                    >
                                        📤 Saída
                                    </a>
                                </div>

                                {/* Botão Secundário: Gabarito */}
                                <a 
                                    href={desafioObj.resolucao} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="w-full border border-verdescuro2/30 text-verdescuro2 font-subtitulo font-medium py-1 px-3 rounded-full transition-all duration-200 hover:border-verdescuro2 hover:bg-verdescuro2/10"
                                >
                                    💡 Gabarito
                                </a>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    );
}