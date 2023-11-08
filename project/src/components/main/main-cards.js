import React from "react";
import { Link } from "react-router-dom";


export default function() {
    return (
        <div className="cards_wrapper">
           <Card 
            img="https://images2.imgbox.com/32/02/VeX874rw_o.jpg"
            title= "Yoga Classes"
            description=" Sign up for our free yoga classes"
            path="/yoga"

            /> 

        <Card 
            img="https://images2.imgbox.com/1c/98/x8XU8WzT_o.jpg"
            title= "Painting Classes"
            description="Sign up for our painting classes"
            path="/pintura"

            /> 

        <Card 
            img=" https://images2.imgbox.com/c5/6f/CycgLD9m_o.jpg"
            title= "Sewing Classes"
            description="Sign up for our free Sewing courses"
            path="/costura"
            /> 
           
        </div>
    );
}

function Card(props){
    return(
        <div className="card">
            <div className="card_body" >
                <div className="image_body">
                    <img src={props.img}/>
                </div>

               <div className="text-card">

               <div className="card_title">{props.title}</div>
               <p className="card_description">{props.description}</p>

               <button className="card__btn" >
               <Link to={props.path}>More Information</Link>  
               </button>
               
               </div> 
            </div>
        </div>

    )
}

