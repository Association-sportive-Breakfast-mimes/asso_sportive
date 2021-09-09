import React from 'react';
import Navigation from './Navigation';
import Burger from './Burger';
import LogoPages from './LogoPages';

const HeaderHoraire =() => {
    return (
        <div className='headHoraire'>
            <Burger />
            <Navigation />
            <LogoPages />
            <h1>Cours et Compétitions</h1>
        </div>
    );
};

export default HeaderHoraire;