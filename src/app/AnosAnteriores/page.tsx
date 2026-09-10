import React from 'react';

export default function AnosAnteriores() {
  const edicoes = [
    {
      ano: '2024',
      titulo: 'BXCOMP 2024',
      descricao: 'Confira os desafios, o ranking final e os projetos marcantes da edição de 2024.',
      link: 'https://bxcomp.petsieach.com.br/', // Coloque aqui o link do site de 2024
    },
    {
      ano: '2025',
      titulo: 'BXCOMP 2025',
      descricao: 'Relembre as etapas, temas e resultados das equipes na edição de 2025.',
      link: 'https://bxcomp25.petsieach.com.br/', // Coloque aqui o link do site de 2025
    },
  ];

  return (
    <div className="page">
        <div className="w-full min-h-screen bg-[#1F4E23] text-white flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#E1FADF]">
            Anos Anteriores
            </h1>
            <p className="text-[#BEGE] opacity-90 max-w-xl mx-auto text-sm md:text-base">
            Explore o histórico das edições passadas do BXCOMP. Acesse os sites para relembrar os temas, equipes e desafios de cada ano!
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            {edicoes.map((edicao) => (
            <div
                key={edicao.ano}
                className="flex flex-col justify-between bg-[#133016]/80 border border-[#23571F] rounded-2xl p-8 hover:border-[#02C59B] transition-all duration-300 hover:shadow-lg hover:shadow-[#02C59B]/10 group"
            >
                <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#02C59B]/20 text-[#02C59B] rounded-full mb-4">
                    Edição {edicao.ano}
                </span>
                <h2 className="text-2xl font-bold text-[#E1FADF] mb-2 group-hover:text-[#02C59B] transition-colors">
                    {edicao.titulo}
                </h2>
                <p className="text-sm text-[#E1FADF]/70 leading-relaxed mb-6">
                    {edicao.descricao}
                </p>
                </div>

                <a
                href={edicao.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#02C59B] hover:bg-[#02C59B]/90 text-[#133016] font-semibold text-sm rounded-xl transition-all duration-200"
                >
                Acessar site de {edicao.ano}
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
                </a>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}