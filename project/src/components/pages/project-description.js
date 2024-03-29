import React, { Component } from "react";
import axios from "axios";

import MainFooter from "../main/main-footer";
import { API_BASE_URL } from "../../constants";

export default class ProjectDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      projectArticle: {}, //this is for the route
    };
  }

  getProjectArticle() {
    axios
      .get(`${API_BASE_URL}/project/${this.state.currentId}`)
      .then((response) => {
        this.setState({
          projectArticle: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getProjectArticle();
  }

  render() {
    const { content, id, image, imagetwo, title, content_two } =
      this.state.projectArticle;

    return (
      <div className="description">
        <div className="text-title">{title}</div>

        <div className="squares-wrapper">
          <div className="squares">
            <div className="square">
              <div className="img-wrapper">
                <img src={image} />
              </div>
              <div className="square-text-wrapper">
                <p>{content}</p>
              </div>
            </div>

            <div className="square">
              <div className="square-text-wrapper">
                <p>{content_two}</p>
              </div>
              <div className="img-wrapper">
                <img src={imagetwo} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <MainFooter />
        </div>
      </div>
    );
  }
}
