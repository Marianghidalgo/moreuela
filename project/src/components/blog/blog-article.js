import React from 'react';
import { Link } from 'react-router-dom';


const BlogArticle = props => {
    const {
      id,
      content,
      title,
      image,
      content_two
    } = props.blogArticle

    return(
      
    <div className="blog-container">

      <div className="blog-card">
        <div className="image" > 
        <img src={image} />
         </div>

        <div className="link">
          <Link to={`/b/${id}`}>
            <h1>{title}</h1>
          </Link>
        </div>

        <div className="content">
          {content}
          <Link to={`/b/${id}`}>
            <p>Learn More</p>
          </Link>
        </div> 
      </div> 
    </div>    
    )  
  }
  
export default BlogArticle;