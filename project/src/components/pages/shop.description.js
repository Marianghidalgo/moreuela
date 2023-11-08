import React, { Component } from "react";
import axios from 'axios';

import MainFooter from "../main/main-footer";


export default class ShopDescription extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            shopArticle: {} //this is for the route
        };
    }

    getShopArticle() {
        axios.get(
          `http://127.0.0.1:5000/shop/${this.state
            .currentId}`
        ).then(response => {
            console.log("response", response);
        this.setState({
            shopArticle: response.data         
        })    
        }).catch(error => {
            console.log("response", response);

        });
      }

      componentDidMount () {
        this.getShopArticle();
      }
  

  render() {

    const {
        description,
        id,
        image,
        name,
        
    } = this.state.shopArticle;

    return (
      <div className="description">

        <div className="text-title">
          {name}
        </div>

        <div className="image-description">
          <img src={image} />
        </div>
        
        <div className="content">
          {description}
        </div>

        <div>
          <MainFooter />
        </div>
      
    </div>
      
    );
  }
}