import React, { Component } from  'react';

import RegistrationBox from '../form/form-course';
import MainFooter from '../main/main-footer';

class Pintura extends Component {
    constructor(props) {
    super(props)
  
}

render(){

    return(

            <div className="imagep">

                <div className="image-pintura">
                    <img src="https://images2.imgbox.com/08/d5/bTFNigmq_o.jpg"></img>
                </div>


                <div className="container-pintura">

                    <div className="text-pintura">
                        Sign up for our painting classes
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

export default Pintura
