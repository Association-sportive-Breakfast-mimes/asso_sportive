import React from 'react';
import Navigation from './Navigation';
import Burger from './Burger';
import LogoPages from './LogoPages';

const HeaderHoaire =() => {
    return (
        <div className='headHoraire'>
            <Burger />
            <Navigation />
            <LogoPages />
        </div>
    );
};

export default HeaderHoaire;