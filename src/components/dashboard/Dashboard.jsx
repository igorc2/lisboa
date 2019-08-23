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
  tasksList: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#6f9e95',
    minHeight: 640
  }
}));


const DashBoard = ({ projects, auth, statusList }) => {
  const classes = useStyles();
  const projectList = statusList && statusList
    .sort((a, b) => a.id - b.id)
    .map(status => 
      (
        <Grid item sm={4} xs={12}>
          <Paper elevation='4' className={classes.tasksList}>
            <h4>{status.name}</h4>
            <ProjectList projects={projects.filter(x => x.status === status.id)} />
          </Paper>
        </Grid>
      ));

  if(!auth.uid) return <Redirect to='/signin'/>
  return (
    <div className='container'>
      <Grid container spacing={3}>
        {projectList}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state :', state);
  return {
    projects: state.firestore.ordered.projects,
    statusList: state.firestore.ordered.statusList,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'},
    { collection: 'statusList' }
  ])
)(DashBoard)