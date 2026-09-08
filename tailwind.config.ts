import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Identidade BXCOMP 2026 · "Brasilidades" ----
        "bege": '#DDCBA1',      // texto claro sobre fundo escuro (bege)
        "verdescuro": '#23571F',  // fundo principal (verde escuro)
        "verdescuro2": '#17240F', // variação mais profunda (cards/gradientes)
        "azulciano": '#498BA7',   // acento secundário (azul)
        "azulelegante": '#3060B2',// acento de contraste (azul forte)
        "creme": '#FFFCE3',       // fundo claro quente (seções claras)
        "verdeclaro": '#EAF7EC',  // fundo claro neutro (seções claras alt)
        "ouro": '#FFAF30',        // laranja/dourado — topo de gradientes
        "amarelo": '#FFC873',     // laranja claro — base de gradientes
        "laranja": '#FFAF30',     // cor de ação principal
        "azul": '#3060B2',      // (mantido por compatibilidade de nome) botão contraste
        "azulsuave": '#4A7BC9', // hover do botão de contraste
        "preto": '#17240F',       // texto sobre fundo claro
        "melao": "#E1FADF",
        "verde": "#23571F",
        "verderocket": "#02C59B",
        "azulescuro": "#193375",
      },
      fontFamily: {
        eloquent: ['Montserrat', 'sans-serif'],        // Título — Montserrat Black
        display: ['Poppins', 'sans-serif'],             // Headlines grandes — Poppins Black
        cinzel_decorative: ['Poppins', 'sans-serif'],   // Títulos de seção em gradiente
        cinzel: ['Poppins', 'sans-serif'],
        subtitulo: ['"Space Grotesk"', 'sans-serif'],   // Sub-título — Space Grotesk Bold
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],               // Texto — Roboto Regular
        times: ['"Space Grotesk"', 'sans-serif'],       // legado (datas do regulamento)
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 30, 10, 0.25)',
      },
      borderRadius: {
        card: '22px',
      },
    },
  },
  plugins: [],
};
export default config;
