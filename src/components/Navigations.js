import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navigations = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const  closeMobileMenu = () => setClick(false);
   
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

    return (
        <div>
            <nav className = 'navbar' >
                <img src="../images/logo.svg" className = "navbar-logo"></img>


                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link exact to = "/" ClassName = "nav-links" onClick = {closeMobileMenu}>Accueil
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact to = "/Histoire" ClassName = "nav-links" onClick = {closeMobileMenu}>Histoire
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact to = "/Association" ClassName = "nav-links" onClick = {closeMobileMenu}>Association
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact to = "/Horaire" ClassName = "nav-links" onClick = {closeMobileMenu}>Horaire
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact to = "/Contact" ClassName = "nav-links" onClick = {closeMobileMenu}>Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link exact to = "/Button" ClassName = "nav-links" onClick = {closeMobileMenu}>Button
                        </Link>
                    </li>
                </ul>

                <div className = "menu-icon" onClick = {handleClick}>
                    {click ? <FaTimes /> : <FaBars /> }
                </div>
        
            </nav>
        </div>
    );
};

export default Navigations;