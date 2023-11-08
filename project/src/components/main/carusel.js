import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class Carusel extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentImage: 0,
            imagenes:["https://images2.imgbox.com/5f/56/p8cceUkY_o.jpg",
            "https://images2.imgbox.com/37/5f/0M4dAWJp_o.jpg",
            "https://images2.imgbox.com/e1/14/gIsJGzmb_o.jpg",
            "https://images2.imgbox.com/74/1d/SZq4ZXcp_o.jpg"
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
        <div className="itemCarusel"> 
            
            <div className="img-carusel">
                <img src={this.state.imagenes[this.state.currentImage]}/>
            </div>
  
            <div className="flechas">    
            <button onClick ={this.previusImage}className="btn-prev">
                <FontAwesomeIcon icon="chevron-left" />
            </button>
                      
            <button onClick={this.nextImage}className="btn-next">
                <FontAwesomeIcon icon="chevron-right" />
            </button>
            </div>  
             
        </div>
            
        )
    }
}

export default Carusel