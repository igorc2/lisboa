import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StatusLabel from '../projects/StatusLabel';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
  actions: {
    justifyContent: 'flex-end'
  }
});

const ProjectSummary = ({ project }) => {
  const classes = useStyles();
  return (

    <Card className={classes.card}>
      <Link to={'/project/' + project.id} key={project.id}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2" color="textPrimary" gutterBottom>
            {project.title}
          </Typography>
          <Typography component="p" color="textSecondary">Responsável: {project.responsible}</Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.action} >
        <StatusLabel projectId={project.id} />
      </CardActions>
    </Card>
  );
}



export default ProjectSummary;