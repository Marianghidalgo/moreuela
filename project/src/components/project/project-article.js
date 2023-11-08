import React from 'react';
import { Link } from 'react-router-dom';




const ProjectArticle = props => {
    const {
      id,
      content,
      title,
      image,
      content_two
    } = props.projectArticle

    return(

      <div className="projects-container">

        <div className="project-card">

          <div className="project-image" > 
            <img src={image} />
          </div>

          <div className="link">
            <Link to={`/p/${id}`}>
              <h1>{title}</h1>
            </Link>
          </div>

          <div className="content">
            <Link to={`/p/${id}`}>
              <button className="learn">Learn More</button>
            </Link>
          </div>

        </div>
         
      </div> 


    )

  }
  
export default ProjectArticle;