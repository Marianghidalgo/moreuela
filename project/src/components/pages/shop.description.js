import React, { Component } from "react";
import axios from "axios";

import MainFooter from "../main/main-footer";
import { API_BASE_URL } from "../../constants";

export default class ShopDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      shopArticle: {}, //this is for the route
    };
  }

  getShopArticle() {
    axios
      .get(`${API_BASE_URL}/shop/${this.state.currentId}`)
      .then((response) => {
        this.setState({
          shopArticle: response.data,
        });
      })
      .catch((error) => {
        console.error("response", error);
      });
  }

  componentDidMount() {
    this.getShopArticle();
  }

  render() {
    const { description, id, image, name } = this.state.shopArticle;

    return (
      <div className="description">
        <div className="text-title">{name}</div>

        <div className="image-description">
          <img src={image} />
        </div>

        <div className="content">{description}</div>

        <div>
          <MainFooter />
        </div>
      </div>
    );
  }
}
