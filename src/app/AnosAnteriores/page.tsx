import Header from "../../components/HeaderFooter/Header";
import Footer from "../../components/HeaderFooter/Footer";

export default function AnosAnteriores() {
    return (
        <div className="page">
            <Header />
            <main className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
                <div className="max-w-[560px] text-center bg-gradient-to-br from-azulescuro2 to-azulescuro rounded-card p-12 shadow-soft">
                    <span className="inline-flex items-center bg-laranja text-azulescuro2 font-subtitulo font-bold text-xs px-4 py-2 rounded-full mb-6">
                        EM CONSTRUÇÃO
                    </span>
                    <h1 className="font-eloquent font-black text-3xl text-creme mb-4">Anos anteriores</h1>
                    <p className="font-roboto text-branco/85 leading-relaxed">
                        Estamos organizando o histórico das edições anteriores do BXCOMP — incluindo a edição de 2025.
                        Volte em breve para relembrar os temas, equipes e desafios de cada ano!
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
