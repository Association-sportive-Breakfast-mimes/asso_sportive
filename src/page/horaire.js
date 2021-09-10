import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHoraire from '../components/HeaderHoraire';

const horaire = () =>{
    return (
        <div className="horaires">
            <HeaderHoraire />
            <div className="sections">
                <div className="center">

                    <h2>Qui pratique l'Aikido ?</h2>

                    {/* bloc Adultes */}
                    <div className="blocs adultes">
                        <img src="./img/aikido_adultes1.jpg" alt="Photos aikido Adultes" className="img1"/>
                        <div className="wrappers">
                            <h3>Aikido Adultes</h3>
                            <p>Déroulement d’un cours chaques cours débute par une séance d’échauffement et d’étirements avec une emphase sur les articulations.
                                La suite du cour est normalement consacrée à l’exécution d’enchaînements « kata »et de techniques d’autodéfense propres à l’aïkido
                                dont l’instructeur fait d’abord la démonstration. 
                                Les élèves pratiquent normalement en paires, alternant les rôles d’attaquant et de défenseur 
                             </p>
                            <div className="btns">
                                <Link exact to = "/Button">Horaires</Link>
                            </div>
                        </div>
                        
                    </div> 
                    {/* bloc Enfants */}   
                    <div className="blocs enfants">
                    <img src="./img/enfants.png" alt="aikido enfants" className="img2"/>
                        <div className="wrappers1">
                            <h3>Aikido Enfants</h3>
                            <p>L’Aïkido pratiqué par les enfants. Les cours sont donnés avec une démarche très ludique, 
                                tout en gardant l’esprit martial et la philosophiede désamorcer l’agression. L’efficacité 
                                n’est pas le but principal, mais par contre le respect du partenaire et la prise de conscience 
                                de son environnement est primordial. Le développement harmonieux de l’enfant et de l’adolescent 
                                est notre objectif.
                            </p>
                            <div className="btns">
                                <Link exact to = "/Button1">Horaires</Link>
                            </div>
                        </div>
                        
                    </div> 
                    {/* bloc Compétitions */}
                    <div className="blocS competitions">
                        <img src="./img/competions.jpg" alt="compétitions" className="img3"/>
                        <div class="wrappers2">
                            <h3>Dates de compétitions</h3>
                            <p>La compétition impose des règles telles que de combattre à 1 contre 1, de ne pas 
                                frapper à tel ou tel endroit, de segmenter par âges ou poids, ou encore d’imposer 
                                des limites de temps, ce qui est contraire aux principes de l’Aikido.
                                Les gagnants de chaque compétitions recoivent un médaille et un prix.
                            </p>
                             <div className="btns">
                                <Link exact to = "/Button2">Dates</Link>
                            </div>
                        </div>
                       
                    </div> 
                
                </div>
            
            </div>

        </div>
    )
}

export default horaire;