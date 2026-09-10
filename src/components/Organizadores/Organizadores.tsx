import organizadoresList from "../../data/organizadores.json";
import Organizador from "./Organizador";
import "./Organizadores.css"

export default function Organizadores() {
    return (
        <section className="mt-[130px] pb-[60px]">
            <div className="titulo flex-col">
                <h1 className="text-[2.8rem] md:text-[3.6rem] font-eloquent font-black titulobrilhante">Organizadores</h1>
                <p className="font-roboto text-bege text-center max-w-[560px] mt-2 px-4">
                    Conheça quem ajudou a construir essa edição do BXCOMP.
                </p>
            </div>

            {organizadoresList.length === 0 ? (
                <div className="mx-auto max-w-[560px] text-center px-8 py-14 border border-dashed border-bege/30 rounded-card">
                    <strong className="block font-eloquent text-creme text-xl mb-2">Equipe em formação</strong>
                    <p className="font-roboto text-bege/80">
                        A equipe organizadora do BXCOMP 2026 será apresentada aqui em breve.
                    </p>
                </div>
            ) : (
                <div id="container-organizadores" className="coluna-organizador">
                    {organizadoresList.map((organizador, i) => (
                        <Organizador key={i} pessoa={organizador} />
                    ))}
                </div>
            )}
        </section>
    )
}
