import React from 'react';

const Footer = () => {
    return (
    <div className="main-footer">
          {/* COLUMN ONE */}
            <div className="nav">
            <h4 className="h4_styles">ACCUEIL</h4>
            {/* LES LIENS VERS LES PAGES */}
            <ul>
                <li><a href="/histoire">Histoire</a></li>
                <li><a href="/Association">L'Asso</a></li>
                <li><a href="/Horaires">Horaires</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
            </div>
          {/* Column3 */}
        <div className="contact">
            <h4 className="h4_styles">COORDONEES</h4>
            <ul className="list-unstyled">
            <li><p> 620 92 92 13 </p></li> <br/>
            <li><p href="simplon.co/NOM">1 Rue du Simplon <br/>5900 Roubaix</p></li> <br/>
            </ul>
        </div>
        {/* COLOMN2 */}
        <div className="social">
                <h4 className="h4_styles">FOLLOW US</h4>
                    <ul className="suivre">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Linked-in</a></li>
                    </ul>
            </div>
        {/* <hr className="line"/> */}
        <div className="row-small">
            <p className="col-sm">
            &copy;{new Date().getFullYear()} BreakFast-Mims | All rights reserved |
            Terms Of Service | Privacy | Newsletter</p>
        </div>
    </div>
    );
};

export default Footer;