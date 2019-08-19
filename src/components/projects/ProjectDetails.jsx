import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import StatusLabel from './StatusLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { deleteProject } from '../../store/actions/projectActions';

class ProjectDetails extends Component  {

  deleteProject = () => {
    console.log('this.props', this.props);
    const project = {
      ...this.props.project,
      id: this.props.projectId
    }
    this.props.deleteProject(project);
    this.props.history.push('/');
  }

  render() {
    const { project, auth, projectId } = this.props;
    moment.locale('pt-br');
    if(!auth.uid) return <Redirect to='/signin'/>
    if(project){
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <div class='section'>
                <span className="card-title">{project.title}</span>
                <p>{project.description}</p>
              </div>
              <div class="divider"></div>
              <div className="section">
                <StatusLabel projectId={projectId} />
              </div>
            </div>
            <div className="card-action grey lighten-4 grey-text">
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <div>Responsável:  {project.responsible}</div>
                <div>{moment(project.createdAt.toDate()).format('lll')}</div>
              </Grid>
              <Grid item xs={6} >
                <Tooltip title="Excluir tarefa">
                  <IconButton aria-label="Delete">
                    <DeleteIcon onClick={this.deleteProject}/>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container center">
          <p>Carregando tarefa...</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
    projectId: id,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (project) => dispatch(deleteProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects'}
  ]),
)(ProjectDetails)
