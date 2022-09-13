// Card = Card with a image into the top, a text into the bottom and a action button to go to a page
// # Main Import 
import React from 'react';

// # Import Component Style
import './Card.css'

export default function Card(props) {
    const card_data = props.data
    return (
        <div className="card">
            <div className="card-body">
                <img src={card_data.img} class="card-image" />
                <h2 className="card-title">{card_data.title}</h2>
                <p className="card-description">{card_data.description}</p>
            </div>
            <button className="card-btn">Go to {card_data.card_name} </button>
        </div>
    );

}