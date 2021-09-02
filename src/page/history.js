import HistoireArticle1 from "../components/articlesHistoire/HistoireArt1";
import HistoireArticle2 from "../components/articlesHistoire/HistoireArt2";
import HistoireArticle3 from "../components/articlesHistoire/HistoireArt3";
import HistoireArticle4 from "../components/articlesHistoire/HistoireArt4";
import HeaderHistory from "../components/HeaderHistory";

const history = () =>{
    return (
        <div className="history">
            <HeaderHistory />
            <HistoireArticle1 />
            <HistoireArticle2 />
            <HistoireArticle3 />
            <HistoireArticle4 />
        </div>

    )
}

export default history;