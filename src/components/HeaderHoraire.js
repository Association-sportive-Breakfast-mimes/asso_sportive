import React from 'react';
import Navigation from './Navigation';
import Burger from './Burger';
import LogoPages from './LogoPages';

const HeaderHoraire =() => {
    return (
        <div className='headhoraire'>
            <Burger />
            <Navigation />
            <LogoPages />
            <h1>Horaires et Dates</h1>
        </div>
    );
};

export default HeaderHoraire