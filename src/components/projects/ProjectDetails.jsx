import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import StatusLabel from './StatusLabel'

const ProjectDetails = (props) => {
  const { project, auth } = props;
  moment.locale('pt-br');
  if(!auth.uid) return <Redirect to='/signin'/>
  if(project){
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.description}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Responsável:  {project.authorFirstName} {project.authorLastName}</div>
            <StatusLabel id={project.status} />
            <div>{moment(project.createdAt.toDate()).format('lll')}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectDetails)
