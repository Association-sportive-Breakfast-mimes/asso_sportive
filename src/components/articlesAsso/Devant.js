import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
export default function Devant ({perso}) {

  return (
    <Card className="Devant {classes.root}">
      <CardActionArea>
        <CardMedia
          image=""
          title="photoPerso"
        />
        <CardContent>
          <Typography 
            gutterBottom variant="h5" 
            component="h2"
            className="NomPerso"
          >
            {perso.prenom + " " + perso.nom}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}