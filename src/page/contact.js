import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navigation from "../components/Navigation";
import Burger from "../components/Burger";
import LogoPages from "../components/LogoPages";

const contact = () =>{
    return (
        <div className="contact">
            <Burger />
            <Navigation />
            <LogoPages />
            <Form />
            <Footer />
        </div>
    )
}

export default contact;