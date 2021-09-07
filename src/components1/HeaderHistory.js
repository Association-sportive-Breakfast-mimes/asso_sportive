import React from 'react';
import LogoPages from './LogoPages';
import Burger from "../components/Burger";
import Navigation from "../components/Navigation";

const HeaderHistory = () => {
    return (

        <div className="headerHistory">
        <Navigation />
        <LogoPages />
        <Burger />
        <p>DECOUVRONS ENSEMBLE CE QU’EST <br /><span className="span-histoire">L’AÏKIDO</span></p>
        </div>
    );
};

export default HeaderHistory;