import React from 'react';

import MainFooter from '../main/main-footer';



export default function() {
    return (

      <div className="page-about-wrapper">
        <div className="about-wrapper"> 

          <div className="left-articles">
            <div className="about-image">
              <div className="image-about">
              <img src="https://images2.imgbox.com/79/0c/eQuctkBv_o.jpg"></img>
              </div>
            </div>
          </div>

          <div className="middle-articles">
            <div className="about-text">
              <p><b>We have a town for you, a project for everyone.</b><br />We want to repopulate our town and that is why on our central offices you can find:
              <li>Job Offers so that you and your family could take the big step and come to the rural world safely.</li>
              <li>A wide range of Homes to Rent or Buy, Business Premises and Farmland</li>
              <li>A special section on Aid and Subsidies so that you know all the facilities that the administrations can offer you in your change of life.</li>
              <b>Moreruela is a project in which you and our beloved town always win.</b>
              </p>   
            </div>
          </div>

          <div className="right-articles">
            <div className="right-image">
              <div className="image-land">
              < img src="https://images2.imgbox.com/7e/60/5gIEplxG_o.jpg"></img>
              </div>
              <div className="image-dad">
                <img src="https://images2.imgbox.com/18/d7/P7wJBZu2_o.jpg"></img>
              </div>
            </div> 
          </div>

        </div>
      
          <div className="footer">
            <MainFooter />
          </div>

      </div>   
        
  );
}