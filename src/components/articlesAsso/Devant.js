import React from 'react'


export default function Devant ({perso}) {
    return (
        <div className="Devant">
            <h2>{perso.prenom + " " + perso.nom}</h2>
            <h3>{perso.grade}</h3>
        </div>          

    )
}