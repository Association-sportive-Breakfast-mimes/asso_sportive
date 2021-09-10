import React from 'react'
import Devant from "../../components/articlesAsso/Devant";
import Derriere from "../../components/articlesAsso/Derriere";

export default function CartePer ({perso}) {
    return (
        <div className="flip">
            <Devant perso={perso} key={perso.id} />
            <Derriere perso={perso} key={perso.id} />         
        </div>
    )
}
