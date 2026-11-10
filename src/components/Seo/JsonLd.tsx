/**
 * Insere dados estruturados (schema.org) em JSON-LD.
 * O "<" é escapado para que nenhum valor consiga fechar a tag <script>.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
    );
}
