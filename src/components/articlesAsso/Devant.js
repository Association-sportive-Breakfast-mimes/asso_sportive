import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

export default function Devant ({perso}) {

  return (
    <div className="Devant">
    <img src={"http://localhost:1337/uploads/thumbnail_carapuce_17097a2dfa.jpeg"} alt="photoPerso" />
    <h2>{perso.Prenom + " " + perso.Nom}</h2>
  </div>
  //   <Card className="Devant {classes.root}">
  //     <CardActionArea>
  //       <CardMedia
  //         image={perso.Photo !== null ? 'http://localhost:1337' +perso.Photo.formats.thumbnail.url : "..."}
  //         title="photoPerso"
  //       />
  //       <CardContent>
  //         <Typography 
  //           gutterBottom variant="h5" 
  //           component="h2"
  //           className="NomPerso"
  //         >
  //           {perso.Prenom + " " + perso.Nom}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //   </Card>
  );
}