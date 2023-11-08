import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (

      <div className="nav-wrapper">

        <div className="left-side"> 
          
          <div className="nav-link-wrapper">
          <NavLink exact to="/">
            Home
          </NavLink>
          </div>

          <div className="nav-link-wrapper">  
          <NavLink to="/about-me">
            About
          </NavLink>
          </div> 

          <div className="nav-link-wrapper">  
          <NavLink to="/project" activeClassName="nav-link-active">
            Project
          </NavLink>
          </div> 

          <div className="nav-link-wrapper">  
          <NavLink to="/blog" activeClassName="nav-link-active">
            Blog
          </NavLink>
          </div> 

          <div className="nav-link-wrapper">  
          <NavLink to="/shop" activeClassName="nav-link-active">
            Shop
          </NavLink>
          </div>  

          <div className="nav-link-wrapper">  
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div> 
                      
        </div> 

          <div className="right-side">
              MORE MORERUELA
          </div>

           
      </div>

    );
  }
}