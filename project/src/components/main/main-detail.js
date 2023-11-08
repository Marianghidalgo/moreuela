import React, {Component} from "react";
import axios from "axios";

import MainFooter from "./main-footer";


class MainDetail extends Component{
    constructor(props){
    super(props)

    this.state = {
        data:{}
    }
    

    }  

    componentDidMount() {
        const id = this.props.match.params.id
        this.getInformation(id);
    }    
    
    getInformation (id) {
        axios
          .get("http://127.0.0.1:5000/portfolio/" + id)
          .then(response => {
            console.log("response data", response);
            this.setState({
                data:response.data
            })   
          })
          .catch(error => {
            console.log(error);
          });
    
    }

    render(){
       
     
    return (

        
        <div className="agriculture-container">

            <div className="original-container">
                <img src={this.state.data.image}/>
                <img src={this.state.data.imagetwo}/>

                <p>{this.state.data.content}</p>
            </div>

            <div className="footer-wrapper">
                <MainFooter />
            </div>
 
        </div>
        
        );
  
    }
         
}
export default MainDetail