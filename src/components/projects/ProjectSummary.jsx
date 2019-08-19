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
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>


    // <div className="card z-depth-0 project-summary">
    //   <Link to={'/project/' + project.id} key={project.id}>
    //     <div className="card-content grey-text text-darken-3">
    //       <span className="card-title">{project.title}</span>
    //       <p>Responsável: {project.responsible}</p>
    //       {/* <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p> */}
    //     </div>
    //   </Link>
    //   <div className="section">
    //     <StatusLabel projectId={project.id} />
    //   </div>
    // </div>
  );
}



export default ProjectSummary;