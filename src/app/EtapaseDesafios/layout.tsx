import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// A página desta rota é um Client Component ('use client'), que não pode exportar metadata.
// Por isso o metadata fica neste layout de rota.
export const metadata: Metadata = pageMetadata({
    title: "Etapas e desafios: enunciados e gabaritos",
    description:
        "As 5 etapas do BXCOMP 2026 (Música, Literatura, Esportes, Festas e Folclore) com os desafios de programação, enunciados em PDF, entradas, saídas e gabaritos em C.",
    path: "/EtapaseDesafios",
});

export default function EtapasLayout({ children }: { children: React.ReactNode }) {
    return children;
}
