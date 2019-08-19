import React from 'react';
import moment from 'moment';
import StatusLabel from '../projects/StatusLabel'
const ProjectSummary = ({project}) => {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Responsável: {project.responsible}</p>
          {/* <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p> */}
        </div>
      </div>
    );
}

export default ProjectSummary;