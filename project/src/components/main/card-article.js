import React from 'react';
import { Link } from 'react-router-dom';

const CardArticle = props => {
    const {
      id,
      title,
      image
    } = props.cardArticle

    return(
      
      <div className="card">
        <div className="card_body" >
           <img src={props.img}/>
           <h2 className="card_title">{props.title}</h2>
           
         <button className="card__btn" >      
            <Link to={`/c/${id}`}>
            <h1>{title}</h1>
            </Link>   
         </button>
        </div>
    </div>
    )
  }
  
export default CardArticle;