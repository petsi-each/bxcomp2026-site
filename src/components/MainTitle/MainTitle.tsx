import Image from 'next/image';

const MainTitle = () => {
  return (
    <main className="relative overflow-hidden text-white flex flex-col items-center justify-start pt-24 md:pt-32 pb-10">

      <div className="relative container max-w-[1240px] w-full px-4 md:px-6 mx-auto flex flex-col items-center">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch w-full my-auto">

          {/* Quadrado do Lado Esquerdo - Texto */}
          <div className="bg-verdescuro2/80 border-2 border-[#23571F] p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-start gap-2.5 mb-4">
                <span className="inline-flex items-center bg-laranja text-verdescuro2 font-subtitulo font-bold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-soft">
                  BXCOMP 2026
                </span>
                <span className="inline-flex items-center bg-azulelegante text-white font-subtitulo font-bold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-soft">
                  Brasilidades
                </span>
              </div>

              <h1 className="font-display font-black text-[2.2rem] md:text-[3rem] leading-[1.05] mb-4 text-left">
                O que é o <span className="gradiente-fixo">BXCOMP</span>?
              </h1>

              <p className="text-bege leading-relaxed text-base md:text-lg w-full text-left sm:text-justify mb-6 font-roboto">
                O BXComp é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação, organizado pelo PET-SI. Em 2026, a competição celebra as <strong className="text-creme">brasilidades</strong>: cultura, música e tradições do Brasil viram desafio de lógica e programação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-3 mt-auto pt-2">
              <a
                href="/Regulamento"
                className="w-full sm:w-auto bg-laranja text-verdescuro2 font-subtitulo font-bold py-3 px-7 rounded-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft text-center text-sm md:text-base"
              >
                REGULAMENTO
              </a>
              <a
                href="/Sobre"
                className="w-full sm:w-auto border-2 border-bege text-bege font-subtitulo font-bold py-3 px-7 rounded-full transition-all duration-300 hover:bg-white/10 text-center text-sm md:text-base"
              >
                SAIBA MAIS
              </a>
            </div>
          </div>

          <div className="bg-verdeclaro border-2 border-[#23571F]/20 rounded-2xl shadow-xl backdrop-blur-sm flex items-center justify-center min-h-[300px] md:min-h-[auto]">
            <div className="relative w-[80vw] h-full min-h-[250px] md:min-h-[320px] flex items-center justify-center">
              <Image
                src="images/logo-bx.png"
                alt="Logo BXCOMP 2026"
                fill
                className="object-contain p-2 " // drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default MainTitle;