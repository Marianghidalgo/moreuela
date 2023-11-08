import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import ContactForm from "../form/contact-form";
import MainFooter from '../main/main-footer';


export default function() {
    return (

    <div className="page-contact-wrapper">

        <div className="contact-wrapper"> 

            <div className="contact-left-articles">
                <div className="contact-text">

                    <div className="company-details-wrapper">
                        <FontAwesomeIcon icon="location-dot" />
                        <div className="street">
                            Tabara Street, 12<br />Moreruela de Tabara
                        </div>
                    </div> 

                    <div className="company-details-wrapper">
                        <FontAwesomeIcon icon="phone" />
                        <div className="telephone">
                            965 675 8754
                        </div>
                    </div> 

                    <div className="company-details-wrapper">
                        <FontAwesomeIcon icon="clock" />
                            <div className="hour">
                                10 AM - 8 PM
                            </div>
                    </div> 
                </div>
            </div>

            <div className="right-articles">
                <div className="contact-text">
                    <p>You can leave us your information and we will contact you. <br />Don't hesitate to contact us for help or additional information.</p>   
                </div>
            </div>
      
        </div>

            <div className="form-contact">
                <ContactForm />
            </div> 

            <div className="footer">
                <MainFooter />
            </div>

    </div>
        
    );
}