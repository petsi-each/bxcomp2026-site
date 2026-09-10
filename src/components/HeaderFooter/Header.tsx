"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { href: "/Regulamento", label: "Regulamento" },
    { href: "/EtapaseDesafios", label: "Etapas & Desafios" },
    { href: "/RankingeGrupos", label: "Ranking & Grupos" },
    { href: "/Sobre", label: "O que é o BXCOMP?" },
    { href: "/AnosAnteriores", label: "Anos anteriores" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Escala de z-index: 200 = header, 250 = overlay escuro do menu mobile, 300 = botão de menu e painel mobile */}
            <header className="z-[200] flex fixed top-0 w-screen justify-between items-center bg-verdeclaro/95 backdrop-blur border-b border-bege/10 py-[6px] pl-6 pr-8">
                <Link href="/">
                    <img className="w-[120px] md:w-[140px]" src="/images/logo-bx.png" alt="Logo BXCOMP" />
                </Link>

                {/* Desktop */}
                <nav className="hidden lg:flex items-center gap-1 py-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-preto text-sm font-subtitulo font-semibold whitespace-nowrap px-4 py-2 rounded-full hover:bg-laranja hover:text-verdescuro2 transition-colors ${pathname === link.href ? "underline decoration-2 decoration-laranja underline-offset-4" : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile toggle */}
                <button
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                    className="lg:hidden mr-1 text-preto z-[300]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <HiMenu className="w-[30px] h-[30px]" />
                </button>
            </header>

            {/* Mobile overlay */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/50 z-[250] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile menu */}
            <div className={`lg:hidden bg-creme fixed top-0 right-0 flex flex-col w-[78%] max-w-[340px] h-[100vh] text-preto z-[300] transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button aria-label="Fechar menu" className="flex justify-end p-4" onClick={() => setIsOpen(false)}>
                    <HiX className="w-[30px] h-[30px]" />
                </button>
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.href}
                        className={`p-5 font-subtitulo font-semibold ${idx !== 0 ? "border-t-2 border-preto/10" : ""} ${pathname === link.href ? "underline decoration-2 decoration-laranja underline-offset-4" : ""}`}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <img src="/images/logo-bx.png" alt="Logo BXCOMP" className="w-[140px] m-auto mt-auto mb-8" />
            </div>
        </>
    );
};

export default Header;
