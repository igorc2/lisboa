import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paperTodo: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#A2F4A5',
    minHeight: 700
  },
  paperDoing: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#A2A5F4',
    minHeight: 700
  },
  paperDone: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#F4A2A5',
    minHeight: 700
  },
}));


const DashBoard = ({ projects, auth }) => {
  const classes = useStyles();
  const projectsToDo = projects && projects.filter(x => x.status === 1);
  const projectsDoing = projects && projects.filter(x => x.status === 2);
  const projectsDone = projects && projects.filter(x => x.status === 3);
  if(!auth.uid) return <Redirect to='/signin'/>
  return (
    <div className='container'>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <Paper elevation='4' className={classes.paperTodo}>
            <h4>A fazer</h4>
            <ProjectList projects={projectsToDo}/>
          </Paper>
        </Grid>
        <Grid item sm={4}  xs={12}>
          <Paper className={classes.paperDoing}>
            <h4>Fazendo</h4>
            <ProjectList projects={projectsDoing}/>
          </Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paperDone}>
            <h4>Feito</h4>
            <ProjectList projects={projectsDone}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(DashBoard)