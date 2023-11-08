import React, { Component } from  'react';

import RegistrationBox from '../form/form-course';
import MainFooter from '../main/main-footer';

class Costura extends Component {
    constructor(props) {
    super(props)
  
}

render(){

    return(

        <div className="imagec">

            <div className="image-costura">
                <img src="https://images2.imgbox.com/45/68/NUQ0ynOj_o.jpg"></img>
            </div> 
        
            <div className="container-costura">
            
                <div className="text-costura">
                    Sign up for our free Sewing and Embroidery courses
                </div>   
                <div className="registration-box">
                    <RegistrationBox />
                </div>

                <div className="footer">
                    <MainFooter />
                </div>

            </div>

        </div>
        
        )
    }
}

export default Costura