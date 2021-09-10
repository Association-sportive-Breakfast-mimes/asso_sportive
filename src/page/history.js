import HistoireArticle1 from "../components/articlesHistoire/HistoireArt1";
import HistoireArticle2 from "../components/articlesHistoire/HistoireArt2";
import HistoireArticle3 from "../components/articlesHistoire/HistoireArt3";
import HistoireArticle4 from "../components/articlesHistoire/HistoireArt4";
import ValeursEduc from "../components/articlesHistoire/ValeursEduc";
import Footer from "../components/Footer";
import HeaderHistory from "../components/HeaderHistory";

const history = () =>{
    return (
        <div className="history">
            <HeaderHistory />
            <div className="center">
                <HistoireArticle1 />
                </div>
                <ValeursEduc />
                <div className="center">
                <HistoireArticle2 />
                <HistoireArticle3 />
                <HistoireArticle4 />
            </div>
            <Footer />
        </div>
    )
}

export default history;