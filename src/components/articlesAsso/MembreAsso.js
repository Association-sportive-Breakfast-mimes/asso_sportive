import React, {useEffect,useState} from 'react'
import CartePer from "./CartePer"


import {Grid, Box} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Membre() {
    const [isLoading, setisLoading] = useState(true)
    const [Membre, setMembre] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/membres',
        {
            method: "GET",
            headers: {
                'Accept': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            setTimeout(()=>{
                setMembre(response)
                setisLoading(false)
            })
        })
    },[]) 

    return (
        <div className="Membre">
            <Grid>
            {isLoading ? (
                <Box>
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                    <Skeleton variant="rect" width={210} height={118} animation="wave" />
                </Box>
            ) : Membre.map (perso => <CartePer  perso={perso} key={perso.id} /> )}
            </Grid>
        </div>
    )
}
