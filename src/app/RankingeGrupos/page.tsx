import Equipes from "@/components/Equipes/Equipes";
import Footer from "../../components/HeaderFooter/Footer";
import Ranking from "../../components/Ranking/Ranking";
import e from "../../data/equipes.json"
import Header from "@/components/HeaderFooter/Header";

const RankingeGrupos = () => {
    return (
        <div className="page">
            <div className="pt-14">
                <Header></Header>
                <Equipes equipes={e}></Equipes>
                <Ranking equipes={e}></Ranking>
            </div>
            <Footer />
        </div>
    );
}

export default RankingeGrupos;
