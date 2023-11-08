import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faChevronRight, faChevronLeft, faCartShopping, faCheckCircle, faLocationDot, faPhone, faClock, faCopyright, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'




import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Blog from "./pages/blog";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import ShopDescription from "./pages/shop.description";
import BlogDescription from "./pages/blog-description";
import ProjectDescription from "./pages/project-description";
import Yoga from "./pages/yoga";
import Pintura from "./pages/pintura";
import Costura from "./pages/costura";
import MainDetail from "./main/main-detail";
import NoMatch from "./pages/no-match";





library.add( fas,faChevronRight, faChevronLeft, faCartShopping, faInstagram, faFacebook, faYoutube, faCheckCircle, faLocationDot, faPhone, faClock, faCopyright, faTrash);

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
           
            
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/project" component={Project} />
              <Route path="/blog" component={Blog} />
              <Route path="/shop" component={Shop} />
              <Route path="/b/:slug" component={BlogDescription} />
              <Route path="/p/:slug" component={ProjectDescription} /> 
              <Route path="/s/:slug" component={ShopDescription} />
              <Route path="/yoga" component={Yoga} />
              <Route path="/pintura" component={Pintura} />
              <Route path="/costura" component={Costura} />
              <Route path="/contact" component={Contact} />
              
              <Route
                exact
                path="/main/:id"
                component={MainDetail}
              />
              <Route component={NoMatch}
                path="*"
              />
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}