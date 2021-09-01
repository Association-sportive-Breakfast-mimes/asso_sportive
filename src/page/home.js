import Article1 from "../components/articles/Article1";
import Article2 from "../components/articles/Article2";
import Article3 from "../components/articles/Article3";
import Header from "../components/Header";
import Intro from "../components/Intro";
const Home = () =>{
    return (
        <div className="home">
            <Header />
            <Intro />
            <Article1 />
            <Article2 />
            <Article3 />
        </div>
    )
}

export default Home;