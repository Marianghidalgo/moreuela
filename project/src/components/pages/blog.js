import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BlogArticle from "../blog/blog-article";
import MainFooter from "../main/main-footer";
import { API_BASE_URL } from "../../constants";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogArticles: [],
    };

    this.getBlogArticles = this.getBlogArticles.bind(this);
  }

  getBlogArticles() {
    axios
      .get(`${API_BASE_URL}/guides`)
      .then((response) => {
        this.setState({
          blogArticles: response.data,
        });
      })
      .catch((error) => {
        console.error("getBlogArticles error", error);
      });
  }

  componentDidMount() {
    this.getBlogArticles();
  }

  render() {
    const blogRecords = this.state.blogArticles.map((blogArticle) => {
      return <BlogArticle Key={BlogArticle.id} blogArticle={blogArticle} />;
    });

    return (
      <div className="records">
        <div className="new-records">{blogRecords}</div>

        <div className="blog-footer">
          <MainFooter />
        </div>
      </div>
    );
  }
}

export default Blog;
