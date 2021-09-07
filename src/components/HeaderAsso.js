import React from 'react';
import LogoPages from './LogoPages';
import Burger from "./Burger";
import Navigation from "./Navigation";

const HeaderAsso = () => {
    return (

        <div className="headerAsso">
        <Navigation />
        <LogoPages />
        <Burger />
        <p>Nul ne peut m'enlever ma force puisque je ne m'en sers pas. <br /><span className="span-asso">- Morihei Ueshiba -</span></p>
        </div>
    );
};

export default HeaderAsso;