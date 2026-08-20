import "./Organizadores.css"

interface PessoaProps {
    nome: string;
    linkedinUrl: string;
    imgSrc?: string;
    dev: boolean;
}

export default function Organizador({ pessoa }: { pessoa: PessoaProps }) {
    const iniciais = pessoa.nome
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join("");

    return (
        <div className="organizador">
            <div className="borda-tracejada">
                <div className="borda-azul">
                    <div className="foto">
                        {pessoa.imgSrc ? (
                            <img src={pessoa.imgSrc} alt={"Foto de " + pessoa.nome} className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <span>{iniciais}</span>
                        )}
                    </div>
                </div>
            </div>

            {pessoa.dev && (
                <div className="selo-organizador">
                    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="26" fill="#FFAF30" stroke="#17240F" strokeWidth="2" />
                        <path d="M18 30 L24 24 L18 18 M38 18 L32 24 L38 30" stroke="#17240F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </div>
            )}

            <a className="nome" href={pessoa.linkedinUrl} target="_blank" rel="noreferrer">
                <span style={{ marginRight: "8px" }}>&lt;{pessoa.nome}&gt;</span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
            </a>
        </div>
    );
}
