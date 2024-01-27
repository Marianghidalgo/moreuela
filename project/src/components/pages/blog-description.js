import React, { Component } from "react";
import axios from "axios";

import CommentBox from "../form/form";
import MainFooter from "../main/main-footer";
import { API_BASE_URL } from "../../constants";

export default class BlogDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogArticle: {}, //this is for the route
    };
  }

  getBlogArticle() {
    axios
      .get(`${API_BASE_URL}/guide/${this.state.currentId}`)
      .then((response) => {
        this.setState({
          blogArticle: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getBlogArticle();
  }

  render() {
    const { content, id, image, title, content_two } = this.state.blogArticle;

    return (
      <div className="description">
        <div className="text-title">{title}</div>

        <div className="image-description">
          <img src={image} />
        </div>

        <div className="content">
          {content}
          {content_two}
        </div>

        <div className="blog-form">
          <CommentBox />
        </div>

        <div className="footer">
          <MainFooter />
        </div>
      </div>
    );
  }
}
