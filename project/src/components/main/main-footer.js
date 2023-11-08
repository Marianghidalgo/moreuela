import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function() {
    return (
        <div className="footer-container">
              
            <div className= "footer-links">
            <a href="/">
                <p>Home</p>
            </a>
            
            <a href="/About-me">
                <p>About</p>
            </a>

            <a href="/Project">
                <p>Project</p>
            </a>
                </div>  

            <div className="social-footer">
                <div  className="btn-instagram">
                <a href="https://www.instagram.com/explore/tags/morerueladetabara/">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
                </div>

                <div  className="btn-facebook">
                <a href="https://www.facebook.com/moreruelakilometrocero/photos?locale=es_ES">
                <FontAwesomeIcon icon="fa-brands fa-facebook" /> 
                </a>
                </div>

                <div  className="btn-youtube">
                <a href="https://youtu.be/fiakx3a0Qt8">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </a> 
                </div>
            </div>    
        

            <div className="subscribe-footer">
                <div className="icon-copyright">
                    <FontAwesomeIcon icon="copyright" />
                </div>
                
                <div className="copyright"> 
                    Copyright 2023 Marian Gonzalez
                </div>
            </div>     


        </div> 

    );
}

