// Current Level = tab with button  < + Text


// # Main Import
import React from "react";
import { Link } from "react-router-dom";


// # Import Component Style
import "./currentLevel.css";

function CurrentLevel(props) {
  const data = props.data;

  return (
    <div className="current-level__container">
      <Link to={data.route}>
        <button className="current-level__bttn">
        <i class="fas fa-chevron-left"></i>
        </button>
      </Link>
      <p className="current-level__text">{data.text}</p>
    </div>
  );
}

export default CurrentLevel;
