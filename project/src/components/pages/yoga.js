import React, { Component } from  'react';

import RegistrationBox from '../form/form-course';
import MainFooter from '../main/main-footer';

class Yoga extends Component {
    constructor(props) {
    super(props)
  
}

render(){

    return(
        <div className="imagey">

            <div className="image-yoga">
                <img src="https://images2.imgbox.com/4c/09/rOZDH9bq_o.jpg"></img>
            </div>


            <div className="container-yoga">

                <div className="text-yoga">
                    Sign up for our Yoga classes
                </div>

                <div className="registration-box">
                    <RegistrationBox />
                </div>

                <div className="footer">
                    <MainFooter />   
                </div>  

            </div>

        </div>
        
        );
    }
}
export default Yoga

