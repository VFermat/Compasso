import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './CardDashProj.css';
const useStyles = makeStyles({
  card: {
    height: 345,
    width: 345
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <div className="project_card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="project_title">
            Nome do Projeto
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className="project_title">
            2020
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className="project_title">
            Data
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className="project_title">
            Sicredi
          </Typography>
        </CardContent>
    </div>
      <CardActions className="seeMore">
        <Button size="small" color="primary">
          Ver detalhes
        </Button>
      </CardActions>
    </Card>
  );
}
