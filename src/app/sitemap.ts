import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://bxcomp26.petsieach.com.br";
  const now = new Date().toISOString();

  return [
    {
      url: baseURL,
      lastModified: now,
    },
    {
      url: `${baseURL}/Sobre`,
      lastModified: now,
    },
    {
      url: `${baseURL}/Regulamento`,
      lastModified: now,
    },
    {
      url: `${baseURL}/EtapaseDesafios`,
      lastModified: now,
    },
    {
      url: `${baseURL}/RankingeGrupos`,
      lastModified: now,
    },
    {
      url: `${baseURL}/AnosAnteriores`,
      lastModified: now,
    },
  ];
}