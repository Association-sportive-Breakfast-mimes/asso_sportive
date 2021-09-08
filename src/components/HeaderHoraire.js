import React from 'react';
import Navigation from './Navigation';
import Burger from './Burger';
import LogoPages from './LogoPages';

const HeaderHoaire =() => {
    return (
        <div className='headhoraire'>
            <Burger />
            <Navigation />
            <LogoPages />
            <h1><span>Horaires de cours</span> <br /><span> &</span><br /> <span> Dates de compétitions</span></h1>
        </div>
    );
};

export default HeaderHoaire;