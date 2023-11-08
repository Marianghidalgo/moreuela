import React, { Component } from "react";
import { Link } from "react-router-dom";




export default class MainItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ mainItemClass: "blur" });
  }

  handleMouseLeave() {
    this.setState({ mainItemClass: "" });
  }



  render(){
  
  const { content, id, image, imagetwo, title } = this.props.item;
    return (
      <div className="main-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
    
        <div
          className={
            "main-img-background " + this.state.mainItemClass
          }  
       
          style={{
            backgroundImage: "url(" + image + ")"
          }}
  
        />

        <div className="text-wrapper">
          <div className="subtitle">
            <Link to={`/main/${id}`}>{title}<p>Learn More</p></Link> 
          </div>
        </div>
      
      </div>
    );
  }
}