import React, {useEffect,useState} from 'react';
import {Grid, Box} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import CartePer from "./CartePer";

export default function Membre() { 
    const [isLoading, setisLoading] = useState(true) /*vérifie si le state est en chargement, le state devra passer à false lorsque les données seront chargées*/
    const [membre, setMembre] = useState(null) /*state pour les membres */
    useEffect(() => { /*on appelle la fonction useEffect pour charger le componenet et faire la requête*/
        fetch('http://localhost:1337/membres',
        {
            method: "GET",
            headers: {
                'Accept': 'Application/json'
            }
        })
        .then(res => res.json()) /*On récupère la réponse */
        .then(response => {
            // console.log(res) /*test console ok : le tableau est bien renvoyé depuis strapi*/
            setTimeout(()=>{
            setMembre(response) /*pour stocker dans le state la réponse de res*/
            setisLoading(false)/*on met à false une fois que les données sont bien chargées */
        }, 2000)
        })
    },[]/*on passe un tableau vide pour intérrompre la boucle infinie de strapi */) 

    return (
        <div className="Membre">
            <Grid container spacing={3}>
            {isLoading ? (
                <Box>
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                </Box>
            ) : membre.map (perso => <CartePer  perso={perso} key={perso.id} /> )}
            </Grid>
        </div>
    )
}