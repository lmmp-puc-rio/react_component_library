// Generic Card = Card with a Title receiving Children Components (CardCases and CardProjects)
// # Main Import
import React from "react";

// # Import Component Style
import "./Card.css";



function Card(props) {
  const data = props.data;
  
  return (
    <div className="card">
          <h2 className="card-title">{data.title}</h2>
          {props.children}
    </div>
  );
}

export default Card;