import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/HeaderFooter/Header";
import Footer from "../../components/HeaderFooter/Footer";
import regulamento from "../../data/regulamento.json"
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Regulamento 2026: inscrição, regras e pontuação",
    description:
        "Regulamento do XVI BXCOMP: quem pode participar, como inscrever sua equipe, datas e horários das etapas, regras da competição, pontuação e critérios de desempate.",
    path: "/Regulamento",
});

const tituloSecao = "font-eloquent font-extrabold text-2xl md:text-3xl text-creme mt-12 mb-4";
const lista = "list-disc pl-6 space-y-2";
const link = "underline decoration-laranja underline-offset-4 hover:text-laranja";

export default function Regulamento() {

    const datas = regulamento.modificacoes.map(mod => {
        const [day, month, year] = mod.data.split('/').map(Number);
        return new Date(year, month - 1, day);
    });

    const latestDate = new Date(Math.max(...datas.map(data => data.getTime())));

    return (
        <>
            <Header></Header>
            <main className="regulamento-page mt-16 text-center px-6">

                <h1 className="gradiente-fixo font-cinzel_decorative font-black text-3xl md:text-5xl px-2 pt-32 pb-8">Regulamento 2026</h1>

                <p className="font-subtitulo text-lg md:text-xl text-bege mb-8">
                    <b className="text-laranja">Última atualização em:</b> {latestDate.toLocaleDateString('pt-BR')}
                </p>

                <p className="font-roboto text-base md:text-lg text-bege max-w-[50rem] mx-auto mb-8">
                    Regulamento do XVI BXComp, o 16º Campeonato de Programação dos Calouros do curso de
                    Sistemas de Informação da EACH-USP, organizado pelo PET-SI.{" "}
                    <a href={regulamento.arquivo} target="_blank" rel="noopener noreferrer" className={link}>
                        Abrir o PDF oficial
                    </a>.
                </p>

                <div className="w-full flex items-center justify-center">
                    <iframe
                        src={regulamento.arquivo}
                        title="Regulamento"
                        className="w-full max-w-[50rem] h-[36rem] lg:h-[50rem] rounded-card bg-white shadow-soft"
                    >
                    </iframe>
                </div>

                {/* Resumo em texto: o conteúdo do PDF dentro do iframe não é indexado como parte desta página. */}
                <article className="font-roboto text-base md:text-lg text-bege text-left max-w-[50rem] mx-auto mt-16 leading-relaxed">

                    <h2 className="font-eloquent font-extrabold text-3xl md:text-4xl text-creme mb-2">Resumo do regulamento</h2>
                    <p>
                        Este resumo organiza as regras principais em texto. Em caso de dúvida, vale sempre o
                        documento oficial em PDF acima.
                    </p>

                    <h2 className={tituloSecao}>Quem pode participar</h2>
                    <ul className={lista}>
                        <li>Estar regularmente matriculado no curso de Sistemas de Informação da EACH-USP;</li>
                        <li>Ser aluno ingressante em 2026;</li>
                        <li>
                            Ter cursado ou estar cursando em 2026, pela primeira vez, a disciplina ACH2001 – Introdução
                            à Programação, ou possuir reaproveitamento nela;
                        </li>
                        <li>
                            Não possuir reaproveitamento de disciplina de programação ou estrutura de dados, exceto a
                            equivalente a ACH2001.
                        </li>
                    </ul>

                    <h2 className={tituloSecao}>Inscrição</h2>
                    <ul className={lista}>
                        <li>
                            As equipes têm três ou quatro alunos, que não precisam ser do mesmo turno. Só um integrante
                            preenche o formulário, com os dados dos demais.
                        </li>
                        <li>
                            Quem não tem equipe pode se inscrever individualmente ou em dupla. Havendo vagas, o PET-SI
                            monta a equipe ou integra a pessoa a uma equipe aberta, de forma aleatória.
                        </li>
                        <li>
                            A inscrição é gratuita e vai das 12h00 de 12 de agosto de 2026 às 23h59 de 28 de agosto de
                            2026, por formulário Google. É preciso anexar o histórico escolar do JúpiterWeb de todos os
                            integrantes.
                        </li>
                        <li>
                            O limite é de 20 equipes, por causa da capacidade do laboratório. Se passar disso, tem
                            preferência quem se inscreveu primeiro.
                        </li>
                        <li>
                            Cada equipe precisa de um nome sem palavras de baixo calão ou termos pejorativos; o PET-SI
                            pode vetar nomes.
                        </li>
                        <li>Ao se inscrever, o e-mail é disponibilizado às empresas parceiras para fins comerciais e acadêmicos.</li>
                    </ul>

                    <h2 className={tituloSecao}>Datas, horários e local</h2>
                    <p className="mb-4">
                        O campeonato tem <strong className="text-creme">cinco etapas</strong> em pontos corridos, sempre
                        presenciais, às 14h30, no laboratório 06 do Ciclo Básico (primeiro andar, terceiro bloco) da EACH-USP.
                        O campeonato só acontece com pelo menos três equipes inscritas.
                    </p>
                    <p className="font-subtitulo font-bold text-laranja mb-2">Datas das etapas (sujeitas a alterações)</p>
                    <ul className={lista}>
                        <li>Etapa 0: 04/09</li>
                        <li>Etapa 1: 18/09</li>
                        <li>Etapa 2: 25/09</li>
                        <li>Etapa 3: 02/10</li>
                        <li>Etapa 4: 09/10</li>
                    </ul>
                    <p className="font-subtitulo font-bold text-laranja mt-6 mb-2">Cronograma de cada etapa</p>
                    <ul className={lista}>
                        <li>14h30: esquenta e apresentações pré-etapa</li>
                        <li>14h45: tolerância máxima de entrada</li>
                        <li>15h00: início da etapa</li>
                        <li>17h00: fim da etapa e pós-etapa</li>
                    </ul>

                    <h2 className={tituloSecao}>Regras da competição</h2>
                    <ul className={lista}>
                        <li>Cada competidor se inscreve em uma única equipe.</li>
                        <li>As equipes têm duas horas para resolver os cinco desafios de cada etapa.</li>
                        <li>Os desafios são resolvidos na linguagem C e submetidos no sistema DOMjudge, só pelo computador definido para a equipe.</li>
                        <li>
                            É permitido usar a internet, mas é proibido usar ferramentas que dão a solução direta dos
                            problemas, como IAs. Dispositivos eletrônicos com internet além do computador fornecido
                            também são proibidos. Quem for flagrado pode ser desclassificado.
                        </li>
                        <li>
                            Não pode haver comunicação com outras equipes ou com pessoas de fora da equipe durante a
                            etapa. Quem infringir a regra não pontua naquela etapa.
                        </li>
                        <li>
                            Em cada dia de competição, a equipe precisa ter ao menos dois competidores presentes e não
                            atrasados (depois das 14h45 é atraso). Do contrário, é considerada ausente: pode participar
                            da etapa, mas não ganha pontos no ranking geral.
                        </li>
                        <li>Não há coach: as equipes são compostas só por competidores.</li>
                        <li>
                            Mau comportamento gera advertência, e a terceira advertência desclassifica a equipe.
                            Discriminação de gênero, raça ou orientação sexual e plágio também levam à desclassificação.
                        </li>
                    </ul>

                    <h2 className={tituloSecao}>Pontuação e critérios de desempate</h2>
                    <p className="mb-4">
                        Cada desafio vale uma quantidade de pontos definida de antemão, e a equipe recebe só os pontos
                        dos desafios que submeteu corretamente. A primeira equipe a resolver cada desafio ganha um ponto
                        de bonificação. Podem ocorrer etapas com pontuação diferenciada, explicadas durante o
                        campeonato. Veja os problemas de cada etapa em{" "}
                        <Link href="/EtapaseDesafios" className={link}>Etapas &amp; Desafios</Link> e a classificação em{" "}
                        <Link href="/RankingeGrupos" className={link}>Ranking &amp; Grupos</Link>.
                    </p>
                    <p className="font-subtitulo font-bold text-laranja mb-2">
                        Em caso de empate na classificação geral, usam-se estes critérios, nesta ordem:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Maior somatória de desafios corretos submetidos durante todo o campeonato;</li>
                        <li>Menor somatória do tempo de resolução dos desafios;</li>
                        <li>Menor somatória de submissões erradas;</li>
                        <li>Menor somatória de ausências de membros da equipe nas etapas.</li>
                    </ol>

                    <h2 className={tituloSecao}>Declaração de participação e camiseta</h2>
                    <p>
                        Quem comparecer a pelo menos 80% do campeonato recebe uma declaração de participação e uma
                        camiseta de brinde. A presença é registrada no encontro pré-etapa, e a camiseta deve ser retirada
                        em até um mês depois do aviso do PET-SI de que está disponível.
                    </p>

                    <h2 className={tituloSecao}>Considerações finais</h2>
                    <ul className={lista}>
                        <li>
                            O PET-SI não se responsabiliza por falhas de infraestrutura, locais ou globais (como queda de
                            energia ou de internet), e a organização pode tomar decisões de gerenciamento de crise.
                        </li>
                        <li>O campeonato acontece integralmente no formato presencial, na EACH-USP.</li>
                        <li>O regulamento pode ser alterado a qualquer momento, se o PET-SI julgar conveniente.</li>
                        <li>Casos omissos são analisados pelo PET-SI.</li>
                    </ul>
                </article>

                <ul className="font-roboto text-lg mt-12 flex flex-col items-center gap-1 text-bege pb-24">
                    {
                        regulamento.modificacoes.map((modificacao, idx) => {
                            return <li key={idx}><b className="text-laranja capitalize">{modificacao.tipo}</b> em: {modificacao.data}</li>
                        })
                    }
                </ul>

            </main>
            <Footer />
        </>
    );
}
