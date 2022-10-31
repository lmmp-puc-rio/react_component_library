// CardCases = Card composed of Image Area, Action Button area, Description Text Box, Fluid List Component, Created by / date and Modified by / date

// # Main Import
import React from "react";
import { Link } from "react-router-dom";

// # Import Component Style
import "./CardCase.css";

// # Import Card Component and Card Buttons Action
import Card from "../card";
import CardButtonsAction from "../cardButtonsAction";

export default function CardCases(props) {
  const card_data = props.data;
  const buttons = props.actionButtom;
  return (
    <Card data={card_data}>
      <div className="card-body-cases">
        <div className="card-container-cases">
          <img src={card_data.img} class="card-image-cases" alt="well" />
          <h3>Criado por:</h3>
          <p className="card-informations-user">
            {card_data.created_name} em {card_data.created_data}
          </p>
          <h3>Modificado por:</h3>
          <p className="card-informations-user">
            {card_data.modified_name} em {card_data.modified_data}
          </p>
        </div>
        <div className="card-container-cases">
          <div className="card-container-bttn-text">
            <div class="card-buttons">
            {buttons.actions.map((action) => (
                <CardButtonsAction callback={action.callback}
                                rowID={card_data.id}
                                routeURL={action.route}
                                tooltip={action.tooltip}
                                className={"action_icon_button"}
                                icon={action.icon}
                                backgroundColor={action.backgroundColor}
                                color={action.color}/>
            ))}
            </div>
            <textarea className="card-description-cases" disabled rows={4}>
              {card_data.description}
            </textarea>
          </div>
          <h3>Fluidos:</h3>
          <ul className="card-description-fluids" disabled>
            {card_data.fluids.map((item) => (
              <li className="card-fluids">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
