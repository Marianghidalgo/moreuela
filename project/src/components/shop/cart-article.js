import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from 'react-router-dom';


const CartArticle = props => {
    const {
      id,
      name,
      price,
      image, 
      description
    } = props.cartArticle

    

    return(

      <div className="shop-container">

        <div className="article-cart">

          <div className="image-shop" > 
            <img src={image} />
          </div>

          <div className="link">
            <Link to={`/s/${id}`}>

              <div className="title">
                <h1>{name}</h1>
              </div>
              </Link>

              <div className="price">
                <h2>{price}€</h2>
              </div> 
            
        
            <button onClick={(event) => props.removeCartArticles(event, props.cartArticle) } className="remove-btn">
              <FontAwesomeIcon icon="trash" />
            </button> 
          </div>
    
        </div> 
        
      </div>
      
    )
  }

  
  
export default CartArticle;