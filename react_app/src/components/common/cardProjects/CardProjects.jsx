// CardProjects = Card composed of Action Button area Description Text box, Created by / date, Modified by / date

// # Main Import
import React from "react";
import { Link } from "react-router-dom";

// # Import Component Style
import "./CardProjects.css";

// # Import Component Card
import Card from "../card";

export default function CardProjects(props) {
  const card_data = props.data;
  const buttons = props.actionButtom;
  console.log(buttons);

  return (
    <Card data={card_data}>
      <div className="card-body-projects">
        <div class="card-buttons">
          {buttons.actions.map((item) => (
            <Link to="/cases">
              <button
                key={"action-icon_" + item.key}
                className={"action-icon"}
                style={{backgroundColor: item.backgroundColor,color: item.color}}
                title={item.tooltip}
              >
                <i className={item.icon}></i>
              </button>
            </Link>
          ))}
        </div>
        <div className="card-informations-projects">
          <textarea className="card-description-projects" disabled rows={5}>{card_data.description}</textarea>
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
