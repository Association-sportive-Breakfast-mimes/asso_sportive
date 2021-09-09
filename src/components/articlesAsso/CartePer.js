import React from 'react'
import Devant from "../../components/articlesAsso/Devant";
import Derriere from "../../components/articlesAsso/Derriere";

export default function CartePer ({perso}) {
    return (
        <div className="flip">
            <h2>{perso.Prenom}</h2>
            <Devant perso={perso} key={perso.Prenom} />
            <Derriere />         
        </div>
    )
}
