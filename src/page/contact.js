import Footer from "../components/Footer";
import Form from "../components/Form";
import Navigation from "../components/Navigation";
import Scrolltop from "../components/Scrolltop";

const contact = () =>{
    return (
        <div className="contact">
        <Navigation />
            <h1>Formulaire de contact</h1>
            <Form />
            <Footer />
            <Scrolltop />
        </div>
    )
}

export default contact;