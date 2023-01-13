// # SideBar = a collapsible React Navigation Menu Component, that is composed of: header, body and footer

// # Main Import
import React, { useState } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

import lmmp from "./lmmp.png";
import greo from "./greo.png";

// # Import Component Style
import "./sideBar.css";

// added fotterIcons for testing
const fotterIcons = [
  { name: "Sobre", iconClassName: "fas fa-info-circle", path: "/sobre" },
  {
    name: "Tutorial",
    iconClassName: "fas fa-graduation-cap",
    path: "/tutorial",
  },
  {
    name: "Notificações",
    iconClassName: "far fa-bell",
    path: "/notificacoes",
  },
];

const SideBar= (props) => {
  /* State responsible for controlling the opening/closing of the sidebar */
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div
        style={{ width: isOpen ? "18.75rem" : "65px" }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="title-side-bar">
            INTERFACES 3D
          </h1>
          <div
            style={{
              marginLeft: isOpen ? "4.0625rem" : "0rem",
              backgroundColor: isOpen ? "transparent" : "#17365c",
              color: isOpen ? "#17365c" : "#fff",
              padding: isOpen ? "0.5rem 0rem" : "0.5rem 0.8rem",
            }}
            className="bars"
          >
            {isOpen ? (
              <i class="far fa-times-circle" onClick={toggle}></i>
            ) : (
              <i className="fas fa-bars" onClick={toggle}></i>
            )}
          </div>
        </div>
        <div className="search-bar-container" style={{ display: isOpen ? "block" : "none" }}>
          <SearchBar />
        </div>
        <div className="main-menu" style={{ display: isOpen ? "block" : "none" }}>
          {isOpen ? <ul className="main-menu__item">{props.children}</ul> : <ul>""</ul>}
        </div>
        <div
          style={{
    
            display: isOpen ? "flex" : "none"
          }}
          className="side-menu-footer-logo"
        >
          <img src={lmmp} alt="logo_1" className="side-footer-img" />
          <img src={greo} alt="logo_2" className="side-footer-img" />
        </div>
        <div
          style={{
            flexDirection: isOpen ? "row" : "column",
            alignItems: isOpen ? "baseline" : "center",
          }}
          className="side-footer-bttn"
        >
          {fotterIcons.map((item) => (
            <Link to={item.path}>
              <button key={item.name} className={"avatar"} title={item.name}>
                <i className={item.iconClassName}></i>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
