import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


function Burger() {

    const [showLinks, setShowLinks] = useState(false)
    const active_burger = () => {
        setShowLinks(!showLinks)
        console.log("ça click")
    }
// ajout du click sur le menu burger
        // function active_burger(event) {
        //     event.preventDefault();
        //     console.log("ça click")
        // }

    return (
            <div onClick={active_burger} className={`button_burger ${showLinks ? "active span" : ""}`}> 
            <span></span>
            {/* <img src=".\img\logo.png" alt="logo" className="bouton-logo"/> */}
            <nav className={`nav_burger ${showLinks ? "burger-open" : "burger-close"}`}>
            <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="Histoire" activeClassName="nav-active">
                L'Histoire
            </NavLink>
            <NavLink exact to="Association" activeClassName="nav-active">
                L'association
            </NavLink>
            <NavLink exact to="Horaires" activeClassName="nav-active">
                Les horaires
            </NavLink>
            <NavLink exact to="Contact" activeClassName="nav-active">
            Contact
            </NavLink>
            </nav>
        </div>
    );
    };


export default Burger;