import Link from "next/link";
import { ObjetivoIlustracao, OrganizacaoIlustracao } from "./ilustracoes";
import Organizadores from "../Organizadores/Organizadores";

function RegulamentoButton() {
    return (
        <Link href="/Regulamento">
            <button className="w-[240px] h-[65px] p-[15px] flex items-center justify-center gap-2.5 bg-[#FFAF30] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_4px_16px_rgba(255,175,48,0.35)] hover:-translate-y-[3px]">
                <svg width="30" height="29" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3259_649)">
                        <path d="M24.5 3.41669H10.5C8.575 3.41669 7.0175 4.95419 7.0175 6.83335L7 34.1667C7 36.0459 8.5575 37.5834 10.4825 37.5834H31.5C33.425 37.5834 35 36.0459 35 34.1667V13.6667L24.5 3.41669ZM28 30.75H14V27.3334H28V30.75ZM28 23.9167H14V20.5H28V23.9167ZM22.75 15.375V5.97919L32.375 15.375H22.75Z" fill="#17240F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3259_649">
                            <rect width="42" height="41" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="font-['Space_Grotesk',sans-serif] font-bold text-[clamp(14px,2.5vw,15px)] leading-tight flex items-center text-center text-[#17240F]">
                    <strong>REGULAMENTO</strong>
                </span>
            </button>
        </Link>
    );
}

export default function Sobre() {
    return (
        <div className="bg-[#23571F] min-h-screen text-[#DDCBA1] pb-[60px]">
            {/* O que é o BXComp */}
            <section className="w-[85%] mx-auto flex flex-col justify-center pt-24">
                <h1 className="font-['Montserrat',sans-serif] font-black text-[2.8rem] my-8 text-[#FFFCE3] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                    O que é o <span className="text-[#FFAF30] text-[2.9rem]">BXCOMP?</span>
                </h1>

                <p className="font-['Roboto',sans-serif] text-[clamp(14px,2vw,18px)] leading-relaxed">
                    O BXCOMP é o campeonato de programação que recebe cada nova turma de calouros do curso de
                    Sistemas de Informação da EACH-USP — e chega à sua 16ª edição em 2026! <br />
                    <br />
                    Cada edição do BXCOMP ganha um tema que transforma desafios de lógica em histórias para
                    viver. Em 2026 é a vez das <strong className="text-[#FFFCE3]">brasilidades</strong> — carnaval, cordel, futebol,
                    festa junina e folclore dão o clima pros calouros programarem.
                </p>
            </section>

            {/* Objetivo */}
            <section className="mt-[clamp(56px,9vw,110px)]">
                <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-8 text-center lg:text-left">
                    <div className="flex-1 flex justify-center items-center [&_svg]:w-full [&_svg]:max-w-[260px] [&_svg]:h-auto">
                        <ObjetivoIlustracao />
                    </div>

                    <div className="flex-1 p-2.5">
                        <h2 className="font-['Montserrat',sans-serif] font-extrabold text-[2.2rem] leading-tight mb-4 text-[#FFFCE3] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                            Por que participar?
                        </h2>
                        <p className="font-['Roboto',sans-serif] text-[clamp(14px,2vw,18px)] leading-relaxed">
                            Mais do que uma prova de conhecimento, o BXCOMP é a porta de entrada dos calouros no
                            mundo da programação competitiva — em equipe, aprendendo na prática ao longo do
                            campeonato. O objetivo vai além da diversão: o campeonato ajuda a preparar os calouros
                            para competições futuras, como olimpíadas e maratonas de programação. <br /><br />
                            Em equipes de até 4 pessoas, os calouros encaram 5 etapas presenciais, cada uma com 5
                            problemas para resolver em 2 horas. Os pontos se acumulam a cada etapa, e vence quem
                            somar a maior pontuação ao final. O BXCOMP já reuniu mais de 100 calouros inscritos e
                            mais de 25 equipes inscritas, numa única edição.
                        </p>
                    </div>
                </div>
            </section>

            {/* Organização */}
            <section className="mt-[clamp(56px,9vw,110px)]">
                <div className="w-[85%] mx-auto flex flex-col md:flex-row-reverse items-stretch justify-between gap-8 text-center md:text-left">
                    <div className="flex-1 flex justify-center items-center [&_svg]:w-full [&_svg]:max-w-[260px] [&_svg]:h-auto">
                        <OrganizacaoIlustracao />
                    </div>

                    <div className="flex-1 p-2.5">
                        <h2 className="font-['Montserrat',sans-serif] font-extrabold text-[2.2rem] leading-tight mb-4 text-[#FFFCE3] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                            Quem está por trás?
                        </h2>
                        <p className="font-['Roboto',sans-serif] text-[clamp(14px,2vw,18px)] leading-relaxed">
                            O campeonato acontece nos laboratórios da EACH, organizado pelo PET-SI (Programa de
                            Educação Tutorial — Sistemas de Informação). <br /><br />
                            O PET é um programa do Governo Federal, subordinado ao Ministério da Educação, com o
                            objetivo de desenvolver projetos nos três pilares da graduação: ensino, pesquisa e
                            extensão.
                        </p>
                    </div>
                </div>
            </section>

            {/* Organizadores - Com distância aumentada */}
            <div className="mt-[3rem]">
                <Organizadores />
            </div>

            {/* Outras competições - Transformado em Cards */}
            <section className="w-[85%] max-w-[1200px] mx-auto mt-[clamp(80px,12vw,140px)]">
                <div className="text-center mb-12">
                    <h2 className="font-['Montserrat',sans-serif] font-extrabold text-[2.5rem] min-[960px]:text-[3rem] leading-[1.25] mb-[1rem] text-[#FFFCE3] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                        Depois do <span className="text-[#FFAF30]">BXCOMP</span>
                    </h2>
                    <p className="font-['Roboto',sans-serif] font-normal text-[clamp(15px,2.2vw,20px)] leading-[1.65] text-[#DDCBA1] max-w-2xl mx-auto">
                        O campeonato é apenas o começo da sua jornada. Conheça as principais competições de programação para dar os próximos passos:
                    </p>
                </div>

                <div className="grid grid-cols-1 min-[960px]:grid-cols-3 gap-6">
                    {/* Card 1: OBI */}
                    <article className="flex flex-col justify-between p-7 bg-black/20 border border-[#DDCBA1]/10 rounded-2xl transition-all duration-300 hover:border-[#1A4F76] hover:bg-black/30 shadow-lg">
                        <div>
                            <span className="text-xs font-bold text-[#FFAF30] uppercase tracking-widest block mb-2">Iniciação</span>
                            <h3 className="text-2xl font-['Montserrat',sans-serif] font-bold text-[#FFFCE3] mb-4">OBI</h3>
                            <p className="font-['Roboto',sans-serif] text-base text-[#DDCBA1]/90 leading-relaxed mb-8">
                                <strong>Olimpíada Brasileira de Informática:</strong> promovida pela Sociedade Brasileira de Computação (SBC). Ideal para consolidar lógica e algoritmos.
                            </p>
                        </div>
                        <a 
                            href="https://olimpiada.ic.unicamp.br/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1A4F76] text-[#FFFCE3] text-sm font-semibold transition-colors duration-200 border border-white/10"
                        >
                            olimpiada.ic.unicamp.br ↗
                        </a>
                    </article>

                    {/* Card 2: Maratona SBC */}
                    <article className="flex flex-col justify-between p-7 bg-black/20 border border-[#DDCBA1]/10 rounded-2xl transition-all duration-300 hover:border-[#1A4F76] hover:bg-black/30 shadow-lg">
                        <div>
                            <span className="text-xs font-bold text-[#FFAF30] uppercase tracking-widest block mb-2">Nacional</span>
                            <h3 className="text-2xl font-['Montserrat',sans-serif] font-bold text-[#FFFCE3] mb-4">Maratona SBC</h3>
                            <p className="font-['Roboto',sans-serif] text-base text-[#DDCBA1]/90 leading-relaxed mb-8">
                                Promovida pela SBC, é a fase nacional e eliminatória oficial para o mundial universitário (ICPC).
                            </p>
                        </div>
                        <a 
                            href="https://maratona.sbc.org.br/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1A4F76] text-[#FFFCE3] text-sm font-semibold transition-colors duration-200 border border-white/10"
                        >
                            maratona.sbc.org.br ↗
                        </a>
                    </article>

                    {/* Card 3: ICPC */}
                    <article className="flex flex-col justify-between p-7 bg-black/20 border border-[#DDCBA1]/10 rounded-2xl transition-all duration-300 hover:border-[#1A4F76] hover:bg-black/30 shadow-lg">
                        <div>
                            <span className="text-xs font-bold text-[#FFAF30] uppercase tracking-widest block mb-2">Mundial</span>
                            <h3 className="text-2xl font-['Montserrat',sans-serif] font-bold text-[#FFFCE3] mb-4">ICPC</h3>
                            <p className="font-['Roboto',sans-serif] text-base text-[#DDCBA1]/90 leading-relaxed mb-8">
                                <i>International Collegiate Programming Contest:</i> a maior, mais antiga e prestigiada competição de programação do mundo.
                            </p>
                        </div>
                        <a 
                            href="https://icpc.global/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1A4F76] text-[#FFFCE3] text-sm font-semibold transition-colors duration-200 border border-white/10"
                        >
                            icpc.global ↗
                        </a>
                    </article>
                </div>
            </section>

            {/* CTA Final */}
            <section className="w-[85%] mx-auto mt-[clamp(56px,9vw,110px)] flex justify-center">
                <RegulamentoButton />
            </section>
        </div>
    );
}