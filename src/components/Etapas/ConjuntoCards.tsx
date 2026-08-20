import { Etapa } from '@/components/Etapas/EtapasInterfaces';
import CardDesafios from "./CardDesafios";

interface ConjuntoCardsProps {
    etapas: Etapa[]
    idSelecionado: number
}

const ConjuntoCards: React.FC<ConjuntoCardsProps> = ({ etapas, idSelecionado }) => {

    return (
        <main>
            <div className="flex items-center flex-col mt-[50px] mb-[30px]">
                <section id="scrollDestiny" className="pt-5 w-full">
                    {
                        idSelecionado != -1 && (
                            <CardDesafios desafios={(etapas[idSelecionado]).desafios} />
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default ConjuntoCards;
