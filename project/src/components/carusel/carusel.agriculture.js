import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class CaruselAgriculture extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentImage: 0,
            imagenes:["https://images2.imgbox.com/74/1d/SZq4ZXcp_o.jpg",
            "https://images2.imgbox.com/98/70/bicOHaO0_o.jpg",
            "https://images2.imgbox.com/fc/be/phl3CcW8_o.jpg",
            "https://images2.imgbox.com/7e/a5/F1eHy2bY_o.jpg"
        ]

        }
        
        this.nextImage = this.nextImage.bind(this);
        this.previusImage = this.previusImage.bind(this);
    }

nextImage(){
    this.setState((prevState) => ({
        currentImage: (prevState.currentImage + 1)%this.state.imagenes.length
    }))
}

previusImage(){
    this.setState((prevState) => ({
        currentImage: (prevState.currentImage - 1 + this.state.imagenes.length)%this.state.imagenes.length
    }))
}

    render(){

        return(
            <div class="itemCarusel"> 
            
              <div className="img-carusel">
                    <img src={this.state.imagenes[this.state.currentImage]}/>
                </div>

            
               
               <div className="flechas"> 
                
                <button onClick ={this.previusImage}class="btn-prev">
                    <FontAwesomeIcon icon="chevron-left" />
                </button>
                      
                <button onClick={this.nextImage}class="btn-next">
                    <FontAwesomeIcon icon="chevron-right" />
                </button>
                </div>   
            </div>
            
        )
    }
}

export default CaruselAgriculture