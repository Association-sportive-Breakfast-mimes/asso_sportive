import React from 'react';

const Footer = () => {
    return (
    <div className="main-footer">
            <div className="container">
        <div className="row">
          {/* COLUMN ONE */}
            <div className="col">
            <h4 className="h4_styles">ACCEUIL</h4>
            {/* LES LIENS VERS LES PAGES */}
                <li><a href="#">Histoire</a></li>
                <li><a href="#">L'Asso</a></li>
                <li><a href="#">Horaires</a></li>
                <li><a href="#">Contact</a></li>
                
            </div>
          {/* COLOMN2 */}
            <div className="col">
                <h4 className="h4_styles">FOLLOW US</h4>
                    <ul className="list-unstyled">
                        <li><a href="#"><i className="fab fa-facebook-f"> Facebook</i></a></li> <br/>
                        <li><a href="#"><i className="fab fa-twitter"> Twitter</i></a></li> <br/>
                        <li><a href="#"><i className="fab fa-instagram"> Instagram</i></a></li> <br/>
                    </ul>
            </div>
          {/* Column3 */}
        <div className="col bot">
            <h4 className="h4_styles">COORDONEES</h4>
            <ul className="list-unstyled">
            <li><a href="https://www.facebook.com/NOM"><i className="fas fa-phone-square-alt"> 620 92 92 13</i></a></li> <br/>
            <li><a href="simplon.co/NOM"><i className="fas fa-map-marker">  <span className="span"> 1 Rue du Simplon <br/>5900 Roubaix</span></i></a></li> <br/>
            </ul>
        </div>
        </div>
        </div>
        {/* <hr className="line"/> */}
        <div className="row-small">
            <p className="col-sm">
            &copy;{new Date().getFullYear()} BreakFast-Mims | All rights reserved |
            Terms Of Service | Privacy | Newsletter
            </p>
        </div>
    </div>
    );
};

export default Footer;
