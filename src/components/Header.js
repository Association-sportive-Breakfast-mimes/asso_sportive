import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header =() => {
    return (
        <div className='head'>
            <Navigation />
            <Logo />
             <p>Si tu <span>vaincs un ennemi</span>, il sera  toujours<span> ton ennemi.</span> Si tu<span> convaincs</span> un ennemi, il<span> deviendra ton ami.</span></p>
        </div>
    );
};

export default Header;