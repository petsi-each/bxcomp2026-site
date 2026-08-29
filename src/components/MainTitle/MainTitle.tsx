const MainTitle = () => {
  return (
    <main className="relative overflow-hidden min-h-screen bg-verdescuro text-white flex flex-col items-center justify-center pt-32 pb-20">

      {/* brilho decorativo de fundo */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_85%_0%,rgba(255,175,48,0.16),transparent_60%),radial-gradient(60%_50%_at_0%_100%,rgba(73,139,167,0.22),transparent_60%)]"></div>

      <div className="relative container max-w-[1240px] w-full px-6 mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

        {/* Texto */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="inline-flex items-center bg-laranja text-verdescuro2 font-subtitulo font-bold text-sm px-5 py-2 rounded-full shadow-soft">
              BXCOMP 2026
            </span>
            <span className="inline-flex items-center bg-azulelegante text-white font-subtitulo font-bold text-sm px-5 py-2 rounded-full shadow-soft">
              Brasilidades
            </span>
          </div>

          <h1 className="font-display font-black text-[2.6rem] md:text-[3.8rem] leading-[1.05] mb-6">
            O que é o <span className="gradiente-titulo">BXCOMP</span>?
          </h1>

          <p className="text-bege leading-relaxed text-lg max-w-[46ch] mx-auto md:mx-0 mb-9 font-roboto">
            O BXComp é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação, organizado pelo PET-SI. Em 2026, a competição celebra as <strong className="text-creme">Brasilidades</strong>: cultura, música e tradições do Brasil viram desafio de lógica e programação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="/Regulamento"
              className="bg-laranja text-verdescuro2 font-subtitulo font-bold py-4 px-9 rounded-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft text-center"
            >
              REGULAMENTO
            </a>
            <a
              href="/Sobre"
              className="border-2 border-bege text-bege font-subtitulo font-bold py-4 px-9 rounded-full transition-all duration-300 hover:bg-white/10 text-center"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>

        {/* Ilustração */}
        <div className="relative flex items-center justify-center min-h-[340px] md:min-h-[420px] order-first md:order-last">
          <span className="absolute top-[8%] left-0 z-10 bg-azulelegante text-white font-subtitulo font-bold text-xs px-4 py-2 rounded-full shadow-soft">
            5 etapas
          </span>
          <span className="absolute bottom-[6%] right-[2%] z-10 bg-laranja text-verdescuro2 font-subtitulo font-bold text-xs px-4 py-2 rounded-full shadow-soft">
            Calouros SI · EACH-USP
          </span>

          <div className="w-[78%] max-w-[360px] aspect-square rounded-full flex items-center justify-center shadow-soft [background:linear-gradient(160deg,var(--azulciano)_0%,var(--verdescuro2)_75%)]">
            <svg viewBox="0 0 200 200" className="w-[58%]" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* bola de futebol estilizada */}
              <circle cx="100" cy="100" r="78" fill="#FFFCE3" />
              <g stroke="#17240F" strokeWidth="3" fill="#17240F">
                <polygon points="100,58 118,71 111,92 89,92 82,71" />
                <polygon points="100,58 118,71 133,55 122,38 100,34" fill="none" />
                <polygon points="100,142 82,129 89,108 111,108 118,129" />
                <path d="M45,100 L62,88 L82,92 L89,108 L72,124 L52,120 Z" fill="none" />
                <path d="M155,100 L138,88 L118,92 L111,108 L128,124 L148,120 Z" fill="none" />
                <circle cx="100" cy="100" r="78" fill="none" strokeWidth="4" />
              </g>
              {/* confete */}
              <rect x="18" y="30" width="10" height="10" fill="#FFAF30" transform="rotate(20 18 30)" />
              <rect x="170" y="150" width="10" height="10" fill="#3060B2" transform="rotate(-15 170 150)" />
              <circle cx="172" cy="35" r="6" fill="#FFC873" />
              <circle cx="24" cy="160" r="6" fill="#498BA7" />
            </svg>
          </div>
        </div>

      </div>
    </main>
  );
};

export default MainTitle;
