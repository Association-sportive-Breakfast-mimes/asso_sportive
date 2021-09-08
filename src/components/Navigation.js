import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <div className="navigation">

            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="Histoire" activeClassName="nav-active">
                Histoire
            </NavLink>
            <NavLink exact to="Association" activeClassName="nav-active">
                L'asso
            </NavLink>
            <NavLink exact to="Horaires" activeClassName="nav-active">
                Horaires
            </NavLink>
            <NavLink exact to="Contact" activeClassName="nav-active">
            Contact
            </NavLink>
        </div>

    );
};

export default navigation;
