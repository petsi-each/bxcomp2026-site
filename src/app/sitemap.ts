import type { MetadataRoute } from "next";
import { SITE_URL, CONTENT_UPDATED } from "@/lib/seo";

export const dynamic = "force-static";

// Caminhos com a mesma caixa das URLs reais e dos canonicals de cada página.
const paths = ["", "/Sobre", "/Regulamento", "/EtapaseDesafios", "/RankingeGrupos", "/AnosAnteriores"];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date(CONTENT_UPDATED);

    return paths.map((path) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
    }));
}
