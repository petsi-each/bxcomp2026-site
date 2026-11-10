import type { Metadata } from "next";

export const SITE_URL = "https://bxcomp26.petsieach.com.br";
export const SITE_NAME = "BXCOMP 2026";

/**
 * Data da última mudança relevante de conteúdo. É usada no sitemap.xml.
 * Atualize este valor quando mudar o conteúdo das páginas (ex.: ranking, etapas),
 * em vez de usar a data do build, que muda a cada deploy e faz o Google ignorar o lastmod.
 */
export const CONTENT_UPDATED = "2026-11-09";

interface PageMetadataInput {
    /** Título curto da página. O sufixo " | BXCOMP 2026" é aplicado pelo template do layout. */
    title: string;
    description: string;
    /** Caminho exato da página, com a mesma caixa da URL real (ex.: "/Sobre"). */
    path: string;
}

/**
 * Gera metadata única por página: title, description, canonical e Open Graph.
 * O Next substitui (não mescla) o objeto openGraph do layout, por isso siteName/locale/type são repetidos aqui.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title: `${title} | ${SITE_NAME}`,
            description,
            url: path,
            siteName: SITE_NAME,
            locale: "pt_BR",
            type: "website",
        },
    };
}
