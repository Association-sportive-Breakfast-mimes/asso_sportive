import React from 'react';
import Navigations from '../components/Navigations';
import { Link } from 'react-router-dom';
import Button from './Button';
import Button1 from './Button1';
import Button2 from './Button2';


const Horaire = () => {
    return (
        <div className = "horaire">
            
            <div className="accueil">
                <Navigations/>
               <h1>Horaires de cours 
                   <br/> & <br/>
                   Date competitions
               </h1>
            </div> 
            <section className="section">
                <h2>Qui pratique l'Aikido ?</h2>
                <div className="bloc bloc-left bloc-1">
                    <div className="bloc-txt-left">
                        <h3>Aikido Adultes</h3>
                        <p>Déroulement d’un cours chaques cours débute par une séance d’échauffement et d’étirements avec une emphase sur les articulations.
                            La suite du cour est normalement consacrée à l’exécution d’enchaînements « kata »et de techniques d’autodéfense propres à l’aïkido
                            dont l’instructeur fait d’abord la démonstration. 
                            Les élèves pratiquent normalement en paires, alternant les rôles d’attaquant et de défenseur 
                        </p>
                        <div className="btn-bloc-left">
                            <Link exact to = "/Button">Horaires cours</Link>
                        </div>
                    </div>
                </div>
                
                <img src="./images/aikido_adultes.jpg" alt="Photos aikido Adultes" class="img-grid img-grid-1"/>
                
                <div class="bloc bloc-right bloc-2">
                    <div class="bloc-txt-right">
                        <h3>Aikido Enfants</h3>
                        <p>L’Aïkido pratiqué par les enfants. Les cours sont donnés avec une démarche très ludique, 
                            tout en gardant l’esprit martial et la philosophiede désamorcer l’agression. L’efficacité 
                            n’est pas le but principal, mais par contre le respect du partenaire et la prise de conscience 
                            de son environnement est primordial. Le développement harmonieux de l’enfant et de l’adolescent 
                            est notre objectif.
                        </p>
                        <div className="btn-bloc-left">
                            <Link exact to = "/Button1">Horaires cours</Link>
                        </div>
                    </div>
                </div>
                
                <img src="./images/enfants-aikido.jpg" alt="aikido enfants" class="img-grid img-grid-2"/>
                <div class="bloc bloc-left bloc-3">
                    <div class="bloc-txt-left">
                        <h3>Dates de compétitions</h3>
                        <p>La compétition impose des règles telles que de combattre à 1 contre 1, de ne pas 
                            frapper à tel ou tel endroit, de segmenter par âges ou poids, ou encore d’imposer 
                            des limites de temps, ce qui est contraire aux principes de l’Aikido.
                            Les gagnants de chaque compétitions recoivent un médaille et un prix.
                        </p>
                        <div className="btn-bloc-left">
                            <Link exact to = "/Button2">Dates compétitions</Link>
                        </div>
                    </div>
                </div>
                <img src="./images/images.jpg" alt="compétitions" class="img-grid img-grid-3"/>
                
                <div class="ligne-gauche"></div>
                <div class="ligne-droite"></div>
            
            </section>

            
                   
        </div>
    );
};

export default Horaire;