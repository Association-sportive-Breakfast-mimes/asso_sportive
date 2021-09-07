import Article1 from "../components/articles/Article1";
import Article2 from "../components/articles/Article2";
import Article3 from "../components/articles/Article3";
import Article4 from "../components/articles/Article4";
import Header from "../components/Header";
import Intro from "../components/Intro";

const home = () =>{
    return (
        <div className="home">
            <Header />
            <Intro />
            <Article1 />
            <Article2 />
            <Article3 />
            <Article4 />
        </div>
    )
}

export default home;