import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto minima perspiciatis assumenda alias sapiente, praesentium exercitationem distinctio quia optio quod nulla animi nostrum repellendus dolorum dicta eos! Commodi, ut unde.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by igão</div>
          <div>2nd, Septemper, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
