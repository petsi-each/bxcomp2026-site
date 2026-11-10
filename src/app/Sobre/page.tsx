import type { Metadata } from "next";
import Sobre from "@/components/Sobre/Page";
import Footer from "../../components/HeaderFooter/Footer";
import Header from "@/components/HeaderFooter/Header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "O que é o BXCOMP? Conheça o campeonato e a equipe",
    description:
        "O que é o BXCOMP, campeonato de programação para calouros de Sistemas de Informação da EACH-USP: como funcionam as etapas, quem organiza e os próximos passos.",
    path: "/Sobre",
});

const Oqueeobxcomp = () => {
    return (
        <div className="page pt-14">
            <Header></Header>
            <Sobre></Sobre>
            <Footer />
        </div>
    );
}

export default Oqueeobxcomp;
