'use client'

import BotaoEtapa from "./BotaoEtapa"
import { Etapa } from '@/components/Etapas/EtapasInterfaces';


interface BarraProps {
    etapas: Etapa[]
    idSelecionado: number
    setIdSelecionado: (id: number) => void
}

const BarraBotoes: React.FC<BarraProps> = ({ etapas, idSelecionado, setIdSelecionado }) => {

    return (
        <section className="flex w-full flex-row justify-between mt-[60px]">
            {
                etapas.map((etapa, idx) => {
                    return (
                        <BotaoEtapa
                            key={idx}
                            etapa={etapa}
                            selecionado={idSelecionado == idx}
                            onClick={() => { setIdSelecionado(idx); }}>
                        </BotaoEtapa>);
                })
            }
        </section>
    );
}
export default BarraBotoes;
