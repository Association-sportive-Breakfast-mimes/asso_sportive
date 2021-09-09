import Articlehoraire1 from "../components/articleshoraire/Articlehoraire1";
import Articlehoraire2 from "../components/articleshoraire/Articlehoraire2";
import Articlehoraire3 from "../components/articleshoraire/Articlehoraire3";
import Footer from "../components/Footer";
import HeaderHoraire from "../components/HeaderHoraire";

const horaire = () =>{
    return (
        <div className="horaire">
            <HeaderHoraire />
            <div className="center">
                <Articlehoraire1 />
                <Articlehoraire2 />
                <Articlehoraire3 />
            </div>
            <Footer />
            
            
        </div>
    )
}

export default horaire;