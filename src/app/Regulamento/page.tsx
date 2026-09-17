import Footer from "../../components/HeaderFooter/Footer";
import regulamento from "../../data/regulamento.json"

export default function Regulamento() {

    const datas = regulamento.modificacoes.map(mod => {
        const [day, month, year] = mod.data.split('/').map(Number);
        return new Date(year, month - 1, day);
    });

    const latestDate = new Date(Math.max(...datas.map(data => data.getTime())));

    return (
        <>
            <main className="regulamento-page mt-16 text-center px-6">

                <h1 className="gradiente-titulo font-cinzel_decorative font-black text-3xl md:text-5xl px-2 pt-32 pb-8">Regulamento 2026</h1>

                <p className="font-subtitulo text-lg md:text-xl text-bege mb-8">
                    <b className="text-laranja">Última atualização em:</b> {latestDate.toLocaleDateString('pt-BR')}
                </p>

                <div className="w-full flex items-center justify-center">
                    <iframe
                        src={regulamento.arquivo}
                        title="Regulamento"
                        className="w-full max-w-[50rem] h-[36rem] lg:h-[50rem] rounded-card bg-white shadow-soft"
                    >
                    </iframe>
                </div>

                <ul className="font-roboto text-lg mt-9 flex flex-col items-center gap-1 text-bege pb-24">
                    {
                        regulamento.modificacoes.map((modificacao, idx) => {
                            return <li key={idx}><b className="text-laranja capitalize">{modificacao.tipo}</b> em: {modificacao.data}</li>
                        })
                    }
                </ul>

            </main>
            <Footer />
        </>
    );
}
