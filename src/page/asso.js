import AssoArticle1 from "../components/articlesAsso/AssoArt1";
import AssoArticle2 from "../components/articlesAsso/AssoArt2";
import AssoArticle3 from "../components/articlesAsso/AssoArt3";
import Footer from "../components/Footer";
import HeaderAsso from "../components/HeaderAsso";

const asso = () =>{
    return (
        <div className="asso">
            <HeaderAsso />
            <AssoArticle2 />
            <AssoArticle1 />
            <AssoArticle3 />
            <Footer />
        </div>
    )
}

export default asso;