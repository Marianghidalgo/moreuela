import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BlogArticle from "../blog/blog-article";
import MainFooter from "../main/main-footer";


class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogArticles: []
    };

    this.getBlogArticles = this.getBlogArticles.bind(this);
  }

  getBlogArticles() {
    axios
      .get(" http://127.0.0.1:5000/guides", {
        withCredentials: true
      })
      .then(response => {
        console.log("response data", response);
        this.setState({
          blogArticles: response.data
        });
      })
      .catch(error => {
        console.log("getBlogArticles error", error);
      });
  }

  componentDidMount() {
    this.getBlogArticles();
  }

  render() { 
    const blogRecords = this.state.blogArticles.map(blogArticle => {
      return <BlogArticle Key={BlogArticle.id} blogArticle={blogArticle} />
      
    });

    return (
    
    <div className="records">

      <div className="new-records" >
        {blogRecords}
      </div>

      <div className="blog-footer">
        <MainFooter />
      </div> 
    
    </div>
    
    );    
  }
}

export default Blog;