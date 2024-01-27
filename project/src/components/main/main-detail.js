import React, { Component } from "react";
import axios from "axios";

import MainFooter from "./main-footer";
import { API_BASE_URL } from "../../constants";

class MainDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getInformation(id);
  }

  getInformation(id) {
    axios
      .get(`${API_BASE_URL}/portfolio/` + id)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="agriculture-container">
        <div className="original-container">
          <img src={this.state.data.image} />
          <img src={this.state.data.imagetwo} />

          <p>{this.state.data.content}</p>
        </div>

        <div className="footer-wrapper">
          <MainFooter />
        </div>
      </div>
    );
  }
}
export default MainDetail;
