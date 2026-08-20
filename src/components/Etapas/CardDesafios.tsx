import { DesafioList } from "@/components/Etapas/EtapasInterfaces";

export default function CardDesafios(props: DesafioList) {
    if (!props.desafios || props.desafios.length === 0) {
        return (
            <div className="mx-auto max-w-[520px] text-center px-8 py-12 border border-dashed border-branco/30 rounded-card">
                <strong className="block font-eloquent text-creme text-xl mb-2">Em breve</strong>
                <p className="font-roboto text-branco/80">
                    Os desafios desta etapa serão publicados aqui assim que a etapa presencial acontecer.
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center w-full gap-5">
                {
                    props.desafios.map((desafioObj, idx) => (
                        <article key={idx} className="flex flex-col justify-evenly px-10 py-6 w-[315px] [@media(min-width:420px)]:w-[380px] min-h-[200px] bg-laranja rounded-[1.2rem] text-center text-azulescuro2 transition-all duration-150 hover:ring-4 hover:ring-azulelegante">
                            <h2 className="text-xl font-eloquent font-extrabold text-azulescuro2">{desafioObj.desafio}</h2>
                            <p className="flex items-center flex-col font-roboto text-base">
                                <a href={desafioObj.enunciado} target="_blank" rel="noreferrer" className="mb-[5px] mt-[5px] text-lg font-subtitulo font-bold text-azulescuro2 w-fit transition-all duration-100 hover:scale-[1.1] hover:text-white">Enunciado</a>
                                <a href={desafioObj.entrada} target="_blank" rel="noreferrer" className="mb-[5px] text-base text-azulelegante w-fit transition-all duration-100 hover:scale-[1.1] hover:font-bold hover:text-white">Entrada</a>
                                <a href={desafioObj.saida} target="_blank" rel="noreferrer" className="mb-[5px] text-base text-azulelegante w-fit transition-all duration-100 hover:scale-[1.1] hover:font-bold hover:text-white">Saída</a>
                                <a href={desafioObj.resolucao} target="_blank" rel="noreferrer" className="text-base text-azulelegante w-fit transition-all duration-100 hover:scale-[1.1] hover:font-bold hover:text-white">Exemplo de gabarito</a>
                            </p>
                        </article>
                    ))
                }
            </div>
        </div>
    );
}
