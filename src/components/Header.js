import React from 'react';
import Logo from './Logo';
import Burger from "../components/Burger";
import Navigation from "../components/Navigation";

const Header = () => {
    return (

        <div className="head">
        <Navigation />
        <Logo />
        <Burger />
        <p>Si tu <span>vaincs un ennemi</span>, il sera  toujours<span> ton ennemi.</span> Si tu<span> convaincs</span> un ennemi, il<span> deviendra ton ami.</span></p>
        </div>
    );
};

export default Header;