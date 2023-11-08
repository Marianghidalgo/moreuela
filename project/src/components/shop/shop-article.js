import React from 'react';

import { Link } from 'react-router-dom';


const ShopArticle = props => {
    const {
      id,
      name,
      price,
      image, 
      description
    } = props.shopArticle

    

    return(
      
      <div className="shop-container">
        <div className="article-card">

          <div className="image" > 
          <Link to={`/s/${id}`}>
            <img src={image} />
          </Link>
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
            
            <button onClick={(event) => props.addCartArticles(event, props.shopArticle) } className="cart-btn">
              Add to Cart
            </button> 
          </div>

        </div> 

      </div>
  )
}
  
export default ShopArticle;