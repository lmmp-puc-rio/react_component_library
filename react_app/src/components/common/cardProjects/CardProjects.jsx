// CardProjects = Card composed of Action Button area Description Text box, Created by / date, Modified by / date

// # Main Import
import React from "react";

// # Import Component Style
import "./CardProjects.css";

// # Import Component Action
import Card from "../card";
import CardActionIcon from "../cardActionIcon"


export default function CardProjects(props) {
  const card_data = props.data;
  const buttons = props.actionButtom

  return (
    <Card data={card_data}>
      <div className="card-body-projects">
        <div class="card-buttons">   
{/* Component that renders the Edit/Delete buttons on a Project */}    
        <CardActionIcon props={buttons.actions[1]} />
        <CardActionIcon props={buttons.actions[2]} />
        </div>
        <div className="card-informations-projects">
          <textarea className="card-description-projects" disabled rows={5}>
            {card_data.description}
          </textarea>
          <h3>Criado por:</h3>
          <p className="card-informations-user">
            {card_data.created_name} em {card_data.created_data}
          </p>
          <h3>Modificado por:</h3>
          <p className="card-informations-user">
            {card_data.modified_name} em {card_data.modified_data}
          </p>
        </div>
      </div>
      </Card>
  );
}
