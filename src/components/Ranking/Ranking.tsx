import Image from 'next/image'
import Link from 'next/link';

export interface Equipe {
    nome: string,
    membros: string[],
    pontos: number[],
    iconPath: string
}

interface RankingProps {
    equipes: Equipe[],
    displayQuantity?: number,
}

interface PointBarProps {
    equipe: Equipe,
    topScores: number[],
}

interface CoroaProps {
    scorePosition: number;
}

/**
 * Coroa de penas de carnaval — substitui as coroas do tema anterior.
 * @param {number} [scorePosition] - Posição no pódio (0 = 1º lugar).
 */
const Coroa: React.FC<CoroaProps> = ({ scorePosition }) => {
    if (scorePosition < 0 || scorePosition > 2) return null;

    const cores = ["var(--ouro)", "var(--azulciano)", "var(--azulsuave)"];
    const cor = cores[scorePosition];

    return (
        <svg viewBox="0 0 60 60" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 34 L14 12 L22 26 L30 8 L38 26 L46 12 L52 34 Z" fill={cor} stroke="var(--verdescuro2)" strokeWidth="1.5" strokeLinejoin="round" />
            <rect x="8" y="34" width="44" height="9" rx="3" fill={cor} stroke="var(--verdescuro2)" strokeWidth="1.5" />
            <circle cx="14" cy="12" r="3" fill={cor} />
            <circle cx="30" cy="8" r="3.4" fill={cor} />
            <circle cx="46" cy="12" r="3" fill={cor} />
        </svg>
    );
}


/**
 * Componente que representa uma barra de pontos para uma equipe.
 *
 * @param {Equipe} equipe - Informações da equipe incluindo nome, membros, pontos e ícone.
 * @param {number} topScores - Lista com a quantidade de ponto dos tres primeiros lugares para renderizar coroa.
 */

const PointBar: React.FC<PointBarProps> = ({ equipe, topScores }) => {

    const totalPontos = equipe.pontos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const percentage = topScores[0] > 0 ? (totalPontos / topScores[0]) * 100 : 0;

    const barWidth = percentage < 8 ? 'fit-content' : percentage + '%'
    const remainingNameWidth = Math.max(0, 100 - percentage) + '%';

    const posicao = topScores.indexOf(totalPontos);

    return (
        <article className="-z-10 pt-[15px] text-white">

            {/* Descrição da equipe no mobile */}
            <div className="md:hidden w-screen px-8 mb-4">
                <h2 className="[@media(min-width:900px)]:text-2xl text-xl relative z-10 truncate font-eloquent font-bold">{equipe.nome}</h2>
                <p className="text-md font-subtitulo font-bold text-laranja">{Math.floor(totalPontos)} pontos</p>
            </div>

            <div className="w-full px-8 mb-6 md:mb-0 flex items-center">
                <div style={{ width: barWidth }} className="flex items-center">

                    <div className="flex flex-grow items-center h-10 shadow-soft bg-white rounded-full">
                        <div style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.25)' }} className="w-full rounded-full m-2 h-4 bg-gradient-to-r from-ouro to-laranja"></div>
                    </div>

                    <div>
                        <figure className="-ml-8 h-20 w-20 relative flex items-center justify-center shadow-soft rounded-full bg-white">
                            <Image style={{ padding: "7px" }} className="absolute" src={equipe.iconPath} sizes={"1"} alt={""} fill={true} unoptimized />
                            {posicao >= 0 && posicao <= 2 && (
                                <div className="absolute w-11 h-11 -top-9">
                                    <Coroa scorePosition={posicao} />
                                </div>
                            )}
                        </figure>
                    </div>

                </div>
                <div style={{ width: remainingNameWidth }} className="min-w-24 lg:min-w-48 px-4 hidden md:block">
                    <h2 className="text-xl w-full truncate font-eloquent font-bold">{equipe.nome}</h2>
                    <p className="text-sm font-subtitulo font-bold text-laranja w-full">{Math.floor(totalPontos)} pontos</p>
                </div>
            </div>

        </article>

    );
}



/**
 * Apresenta um *Ranking* de equipes com base nos pontos.
 *
 * @param {RankingProps} equipes - Lista de equipes a serem exibidas no ranking.
 * @param {number} [displayQuantity] - OPCIONAL: Quantidade de equipes a serem exibidas. Se não especificado, exibe todas as equipes.
 *
 */

const Ranking: React.FC<RankingProps> = ({ equipes, displayQuantity = -1 }) => {

    const sortedEquipes = [...equipes];
    displayQuantity = displayQuantity >= equipes.length ? -1 : displayQuantity;


    const sumPoints = (points: number[]): number => {
        return points.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };

    sortedEquipes.sort((a, b) => sumPoints(b.pontos) - sumPoints(a.pontos));

    const topScores = Array.from(new Set(sortedEquipes.map(equipe => sumPoints(equipe.pontos)))).slice(0, 3).filter(score => score !== 0).filter((score, idx, arr) => !(idx === 0 && score === 1));

    const displayEquipes = displayQuantity < 0 ? sortedEquipes : sortedEquipes.slice(0, displayQuantity)

    return (
        <section className="grid grid-rows-1 gap-8 md:gap-2 md:pl-20" style={{ marginTop: "90px", marginBottom: "30px" }}>
            <h1 className="text-[3.2rem] w-fit font-black pl-7 md:pl-0 font-cinzel_decorative gradiente-titulo" style={{ marginTop: "10px" }}>Ranking</h1>

            {equipes.length === 0 ? (
                <div className="mx-7 md:mr-20 px-8 py-14 text-center border border-dashed border-bege/30 rounded-card">
                    <strong className="block font-eloquent text-creme text-xl mb-2">Ainda não há pontuações</strong>
                    <p className="font-roboto text-bege/80 max-w-[520px] mx-auto">
                        O ranking do BXCOMP 2026 será atualizado conforme as etapas presenciais acontecem.
                    </p>
                </div>
            ) : (
                <>
                    {displayEquipes.map((equipe, index) => {
                        return (
                            <PointBar key={index} equipe={equipe} topScores={topScores} />
                        );
                    })}
                    {btnRankingCompleto(displayQuantity)}
                </>
            )}
        </section>
    );
};

const btnRankingCompleto = (displayQuantity: number) => {
    if (displayQuantity != -1) {
        return (
            <div className="flex justify-center mt-14 md:pr-20">
                <Link href="/RankingeGrupos" className="bg-azulelegante hover:bg-azulciano transition-colors p-4 px-6 rounded-full flex items-center gap-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3l2.4 5.2L20 9l-4 4 1 5.6L12 16l-5 2.6 1-5.6-4-4 5.6-0.8L12 3z" fill="var(--laranja)" />
                    </svg>
                    <p className="text-md font-subtitulo font-bold text-white">Ranking Completo</p>
                </Link>
            </div>
        );
    }

    return null;
}

export default Ranking;
