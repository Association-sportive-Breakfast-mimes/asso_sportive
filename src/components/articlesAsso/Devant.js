// import React from 'react'
// import CardMedia from '@material-ui/core/CardMedia';
// // import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';


// export default function Devant ({perso}) {
//     return (
//         <div className="Devant">
//             <Card >
//                 <CardActionArea>
//                     <CardMedia
//                         image={perso.photo !== null ? 'http://localhost:1337' + perso.photo[1].formats.small.url : "... "}
//                         title="Fondateur"
//                     />
//                 </CardActionArea>
//             </Card>
            
//         </div>          

//     )
// }
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 220,
//   },
//   media: {
//     height: 300,
//   },
// });

export default function Devant ({perso}) {
  // const classes = useStyles();

  return (
    <Card className="Devant {classes.root}">
      <CardActionArea>
        <CardMedia
          // className={classes.media}
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