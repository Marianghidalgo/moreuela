import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProjectArticle from "../project/project-article";
import MainFooter from "../main/main-footer";
import { API_BASE_URL } from "../../constants";


class Project extends Component {
  constructor() {
    super();

    this.state = {
      projectArticles: []
    };

    this.getProjectArticles = this.getProjectArticles.bind(this);
  }

    getProjectArticles() {
    axios
      .get(`${API_BASE_URL}/projects`, {
        withCredentials: true
      })
      .then(response => {
        console.log("response data", response);
          this.setState({
          projectArticles: response.data
        });
      })
      .catch(error => {
        console.log("getProjectArticles error", error);
      });
  }

  componentDidMount() {
    this.getProjectArticles();
  }
  

  render() { 

    const projectRecords = this.state.projectArticles.map(projectArticle => {
      return <ProjectArticle key={ProjectArticle.id} projectArticle={projectArticle} />
    });

    return (

    <div className="project-container">

      <div className="text">
        <p>Here we want to share some project that show how even the tiniest changes can make our town a better place</p>
      </div>
      
      <div className="new-projects" >
        {projectRecords}
      </div>

      <div className="project-footer">
        <MainFooter />
      </div> 

    </div>
    
    );  
  }
}

export default Project;