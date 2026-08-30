import Sobre from "@/components/Sobre/Page";
import Footer from "../../components/HeaderFooter/Footer";
import Header from "../../components/HeaderFooter/Header";
import Organizadores from "../../components/Organizadores/Organizadores";

const Oqueeobxcomp = () => {
    return (
        <div className="page pt-14">
            <Header />
            <Sobre></Sobre>
            <Organizadores></Organizadores>
            <Footer />
        </div>
    );
}

export default Oqueeobxcomp;
