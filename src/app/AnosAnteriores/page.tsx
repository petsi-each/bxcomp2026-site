import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/HeaderFooter/Header';
import React from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Anos anteriores: edições passadas do campeonato',
  description:
    'Relembre as edições anteriores do BXCOMP, campeonato de programação para calouros de Sistemas de Informação da EACH-USP: temas, desafios e equipes de cada ano.',
  path: '/AnosAnteriores',
});

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
        <Header></Header>
        <div className="w-full min-h-screen bg-[#1F4E23] text-white flex flex-col items-center justify-center px-4 pt-[8rem] pb-[1rem]">
        <div className="max-w-4xl w-full text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-brasileira tracking-tight text-ouro">
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

        <section className="max-w-4xl w-full mt-14 pb-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-brasileira text-ouro">Uma história de 16 edições</h2>
            <p className="text-sm md:text-base text-[#E1FADF]/80 leading-relaxed">
                O BXCOMP começou em 2011, quando o PET-SI organizou o 1º Campeonato de Programação para Calouros do
                curso de Sistemas de Informação da EACH-USP. Desde então, cada nova turma de ingressantes é recebida
                com uma edição, com tema próprio e desafios inéditos. Em 2026 a competição chega à 16ª edição, com o
                tema Brasilidades.
            </p>
            <p className="text-sm md:text-base text-[#E1FADF]/80 leading-relaxed">
                Veja <Link href="/Sobre" className="underline decoration-[#02C59B] underline-offset-4 hover:text-[#02C59B]">como o campeonato funciona</Link>,
                os <Link href="/EtapaseDesafios" className="underline decoration-[#02C59B] underline-offset-4 hover:text-[#02C59B]">desafios da edição atual</Link> e
                o <Link href="/RankingeGrupos" className="underline decoration-[#02C59B] underline-offset-4 hover:text-[#02C59B]">ranking das equipes de 2026</Link>.
            </p>
        </section>
        </div>
    </div>
  );
}