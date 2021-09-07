import Footer from "../components/Footer";
import Form from "../components/Form";
import Navigation from "../components/Navigation";

const contact = () =>{
    return (
        <div className="contact">
        <Navigation />
            <h1>Formulaire de contact</h1>
            <Form />
            <Footer />
        </div>
    )
}

export default contact;