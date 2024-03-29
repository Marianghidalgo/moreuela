import React, { Component } from "react";
import axios from "axios";

import MainItem from "./main-item";
import MainCards from "./main-cards";
import MainFooter from "./main-footer";
import Carusel from "./carusel";
import { API_BASE_URL } from "../../constants";

export default class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "",
      isLoading: false,
      data: [],
    };
  }

  getMainItems() {
    axios
      .get(`${API_BASE_URL}/portfolios`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  mainItems() {
    return this.state.data.map((item) => {
      return <MainItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getMainItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="main-items-wrapper">{this.mainItems()}</div>

        <div className="news">
          <p>CLASSES</p>
        </div>

        <div className="cards_react">
          <MainCards />
        </div>

        <div className="carusel">
          <Carusel />
        </div>

        <div className="footers">
          <MainFooter />
        </div>
      </div>
    );
  }
}
