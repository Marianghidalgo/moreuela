import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ShopArticle from "../shop/shop-article";
import MainFooter from "../main/main-footer";
import CartArticle from "../shop/cart-article";
import { API_BASE_URL } from "../../constants";

class Shop extends Component {
    constructor() {
      super();
  
      this.state = {
        shopArticles: [],
        cartArticles: []
      };
  
      this.getShopArticles = this.getShopArticles.bind(this);
      this.setCartArticles = this.setCartArticles.bind(this);
      this.removeCartArticles = this.removeCartArticles.bind(this);
      
    }
    
    removeCartArticles(event, item) {
      const filterCartArticles =  this.state.cartArticles.filter(article => article.id !== item.id)
      this.setState({
        cartArticles: filterCartArticles
    })

    }


    setCartArticles (event, item) {
      event.preventDefault();
      this.setState({
        cartArticles: [...this.state.cartArticles, item]//spread operator
    });
    }

    
    getShopArticles() {
      axios
        .get(`${API_BASE_URL}/shops`, {
          withCredentials: true
        })
        .then(response => {
          console.log("response data", response);
          this.setState({
            shopArticles: response.data
          });
        })
        .catch(error => {
          console.log("getShopArticles error", error);
        });
    }
  
    componentDidMount() {
      this.getShopArticles();
    }
  
    render() {
      const shopping = this.state.shopArticles.map(shopArticle => {
        return <ShopArticle key={shopArticle.id} shopArticle={shopArticle} addCartArticles={this.setCartArticles}/>;

      });

      const cart = this.state.cartArticles.map(cartArticle => {

        return <CartArticle key={cartArticle.id} cartArticle={cartArticle} removeCartArticles={this.removeCartArticles}/>;

      });

    return (

    <div className="articles">

      <div className="articles-wrapper"> 

        <div className="shop-left-articles">
          <div className="new-articles-shop">
            {shopping/*const shopping*/}
          </div>
        </div>

        <div className="shop-right-articles">
          <div className="new-articles-cart">
            {cart/*const cart*/}
          </div>
        </div>
      
      </div>

        <div className="shop-footer">
          <MainFooter />
        </div>

    </div> 

    );
  }
}
  
export default Shop;