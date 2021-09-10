import React from 'react'


export default function Devant ({perso}) {
    return (
        <div className="Devant">
            <img src={"http://localhost:1337/uploads/thumbnail_carapuce_17097a2dfa.jpeg"} alt="photoPerso" />
            <h2>{perso.prenom + " " + perso.nom}</h2>
            <h3>{perso.grade}</h3>
        </div>          

    )
}