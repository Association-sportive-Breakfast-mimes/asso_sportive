import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="./">
                Accueil
            </NavLink>
            <NavLink exact to="histoire">
                Histoire
            </NavLink>
            <NavLink exact to="asso">
                L'asso
            </NavLink>
            <NavLink exact to="horaires">
                Horaires
            </NavLink>
            <NavLink exact to="contact">
                Contact
            </NavLink>
        </div>
    );
};

export default Navigation;