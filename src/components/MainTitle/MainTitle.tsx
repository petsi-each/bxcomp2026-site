import Image from 'next/image';

const MainTitle = () => {
  return (
    <main className="relative overflow-hidden bg-verdescuro text-white flex flex-col items-center justify-start pt-20 pb-16">

      <div className="relative container max-w-[1240px] w-full px-6 mx-auto flex flex-col items-center">

        {/* ================= LOGO PRINCIPAL (GRANDE E EM DESTAQUE) ================= */}
        <div className="w-full flex items-center justify-center my-16 min-h-[260px] md:min-h-[340px]">
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

        {/* ================= BLOCO PRINCIPAL (REDUZIDO E DESLOCADO) ================= */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center w-full mt-2 scale-[0.95] md:scale-100">

          {/* <h1 className="font-brasileira font-black text-[2.6rem] md:text-[3.8rem] leading-[1.05] mb-6">
            O que é o <span className="gradiente-destaque" data-text="BXCOMP">BXCOMP</span>?
          </h1> */}
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

          {/* Ilustração (Lado Direito - Levemente Menor) */}
          <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[360px] order-first md:order-last">
            <span className="absolute top-[6%] left-2 z-10 bg-azulelegante text-white font-subtitulo font-bold text-xs px-3.5 py-1.5 rounded-full shadow-soft">
              5 etapas
            </span>
            <span className="absolute bottom-[4%] right-[2%] z-10 bg-laranja text-verdescuro2 font-subtitulo font-bold text-xs px-3.5 py-1.5 rounded-full shadow-soft">
              Calouros SI · EACH-USP
            </span>

            <div className="w-[72%] max-w-[320px] aspect-square rounded-full flex items-center justify-center shadow-soft [background:linear-gradient(160deg,var(--azulciano)_0%,var(--verdescuro2)_75%)]">
              <svg viewBox="0 0 200 200" className="w-[55%]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="78" fill="#FFFCE3" />
                <g stroke="#17240F" strokeWidth="3" fill="#17240F">
                  <polygon points="100,58 118,71 111,92 89,92 82,71" />
                  <polygon points="100,58 118,71 133,55 122,38 100,34" fill="none" />
                  <polygon points="100,142 82,129 89,108 111,108 118,129" />
                  <path d="M45,100 L62,88 L82,92 L89,108 L72,124 L52,120 Z" fill="none" />
                  <path d="M155,100 L138,88 L118,92 L111,108 L128,124 L148,120 Z" fill="none" />
                  <circle cx="100" cy="100" r="78" fill="none" strokeWidth="4" />
                </g>
                <rect x="18" y="30" width="10" height="10" fill="#FFAF30" transform="rotate(20 18 30)" />
                <rect x="170" y="150" width="10" height="10" fill="#3060B2" transform="rotate(-15 170 150)" />
                <circle cx="172" cy="35" r="6" fill="#FFC873" />
                <circle cx="24" cy="160" r="6" fill="#498BA7" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default MainTitle;