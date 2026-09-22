import Image from 'next/image';

const MainTitle = () => {
  return (
    <main className="relative overflow-hidden text-white flex flex-col items-center justify-start pt-32 pb-10">

      <div className="relative container max-w-[1240px] w-full px-6 mx-auto flex flex-col items-center">

        {/* ================= BLOCO PRINCIPAL ================= */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center w-full my-auto scale-[0.95] md:scale-100">

          {/* Texto Envolvido por Quadrado Verde */}
          <div className="bg-verdescuro2/80 border-2 border-[#23571F] p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-sm text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
              <span className="inline-flex items-center bg-laranja text-verdescuro2 font-subtitulo font-bold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-soft">
                BXCOMP 2026
              </span>
              <span className="inline-flex items-center bg-azulelegante text-white font-subtitulo font-bold text-xs md:text-sm px-4 py-1.5 rounded-full shadow-soft">
                Brasilidades
              </span>
            </div>

            <h1 className="font-display font-black text-[2.2rem] md:text-[3.2rem] leading-[1.05] mb-4">
              O que é o <span className="gradiente-fixo">BXCOMP</span>?
            </h1>

            <p className="text-bege leading-relaxed text-base md:text-lg max-w-[46ch] mx-auto md:mx-0 mb-6 font-roboto">
              O BXComp é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação, organizado pelo PET-SI. Em 2026, a competição celebra as <strong className="text-creme">brasilidades</strong>: cultura, música e tradições do Brasil viram desafio de lógica e programação.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
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

          {/* ================= LOGO PRINCIPAL (Lado Direito) ================= */}
          <div className="w-full flex items-center justify-center min-h-[300px] md:min-h-[360px] order-first md:order-last">
            <div className="shadow-soft rounded-card relative w-full max-w-[650px] h-[260px] md:h-[340px] transition-transform duration-300 hover:scale-[1.02] bg-verdeclaro">
              <Image
                src="images/logo-bx.png" // Substitua pelo caminho da sua logo principal
                alt="Logo BXCOMP 2026"
                fill
                className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
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