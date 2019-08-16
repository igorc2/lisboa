import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import StatusLabel from './StatusLabel'
import { updateProject } from '../../store/actions/projectActions';



class ProjectDetails extends Component  {

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      status: 1
    })
    this.props.updateProject(this.state);
    this.props.history.push('/');
  }

  render() {
    const { project, auth } = this.props;
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
          <form onSubmit={this.handleSubmit} className="white">
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Criar</button>
            </div>
          </form>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project) => dispatch(updateProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectDetails)
