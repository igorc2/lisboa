import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect }  from 'react-redux-firebase';
import { compose } from 'redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withRouter } from 'react-router-dom';
import { updateProject } from '../../store/actions/projectActions';

const statusList = [
  { id: 1, name: "A fazer" },
  { id: 2, name: "Fazendo" },
  { id: 3, name: "Concluída" },
]


class StatusLabel  extends Component {
  
  handleChange = (e) => {
    e.preventDefault();
    const project = {
      ...this.props.project,
      id: this.props.projectId
    }
    project.status =  e.target.value;
    this.props.updateProject(project);
    this.props.history.push('/');
  }

  render() {
    const { project } = this.props;
    return (
      <FormControl >
        <InputLabel htmlFor="age-simple">Status</InputLabel>
        <Select
          id='status'
          value={project.status}
          onChange={this.handleChange}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
          >
          { statusList.map(s => 
            <MenuItem value={s.id}>{s.name}</MenuItem>
            )}
        </Select>
      </FormControl>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.projectId;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
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
  ]),
  withRouter
)(StatusLabel)
