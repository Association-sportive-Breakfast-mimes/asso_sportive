import Header from "../components/Header";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Scrolltop from "../Components/Scrolltop";

const contact = () =>{
    return (
        <div className="contact">
            <Header />
            <Form />
            <Footer />
            <Scrolltop />
            <h1>Formulaire de contact</h1>
        </div>
    )
}

export default contact;