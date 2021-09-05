import AssoArticle1 from "../components/articlesAsso/AssoArt1";
import AssoArticle2 from "../components/articlesAsso/AssoArt2";
import AssoArticle3 from "../components/articlesAsso/AssoArt3";
import HeaderAsso from "../components/HeaderAsso";

const asso = () =>{
    return (
        <div className="asso">
            <HeaderAsso />
            <AssoArticle1 />
            <AssoArticle2 />
            <AssoArticle3 />
        </div>
    )
}

export default asso;