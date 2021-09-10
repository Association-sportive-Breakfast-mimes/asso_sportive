import Article1 from "../components/articles/Article1";
import Article2 from "../components/articles/Article2";
import Article3 from "../components/articles/Article3";
import Article4 from "../components/articles/Article4";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intersection from "../components/intersections/Intersection";
import Intersectionhistory from "../components/intersections/Intersectionhistory";
import Intersectionhoraire from "../components/intersections/Intersectionhoraire";
import Intro from "../components/Intro";

const home = () =>{
    return (
        <div className="home">
            <Header />
                <Intersection />
            <div className="center">
                <Intro />
                <Article1 />
                <Article2 />
                <Article3 />
            </div>
            <Intersectionhistory />
            <div className="center">
                <Article4 />
            </div>
            <Intersectionhoraire />
            <Footer />
        </div>
    )
}

export default home;