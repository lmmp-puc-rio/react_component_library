// CardCases = Card composed of Image Area, Action Button area, Description Text Box, Fluid List Component, Created by / date and Modified by / date

// # Main Import
import React from "react";
import { Link } from "react-router-dom";

// # Import Component Style
import "./CardCase.css";

// # Import Component Card
import Card from "../card";

export default function CardCases(props) {
  const card_data = props.data;
  const buttons = props.actionButtom;

  return (
    <Card data={card_data}>
      <div className="card-body-cases">
        <img src={card_data.img} class="card-image-cases" alt="well" />
        <div class="card-buttons">
          {buttons.actions.map((item) => (
            <Link to="/cases">
              <button
                key={"action-icon_" + item.key}
                className={"action-icon"}
                style={{backgroundColor: item.backgroundColor, color: item.color,}}
                title={item.tooltip}
              >
                <i className={item.icon}></i>
              </button>
            </Link>
          ))}
        </div>
        <div className="card-informations-cases">
          <textarea className="card-description-cases" disabled rows={5}>
            {card_data.description}
          </textarea>
          <h3>Fluidos:</h3>
          <ul className="card-description-fluids" disabled>
            {card_data.fluids.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
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
