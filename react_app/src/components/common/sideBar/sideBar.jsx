// # SideBar = a collapsible React Navigation Menu Component, that is composed of: header, body and footer

// # Main Import
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";


// # Import Component Style
import "./sideBar.css";

// # Import MenuItem
import MenuItem from "./menuItems";


//import Accordion Recursive
import RecursiveAccordion from '../recursiveAccordion/'

// added menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    to: "/",
    iconClassName: "fas fa-home",
  },
  {
    name: "Content",
    to: `/content`,
    iconClassName: "fas fa-archive",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  {
    name: "Content 2",
    to: `/content-2`,
    iconClassName: "fas fa-folder",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
];

// added fotterIcons for testing
export const fotterIcons = [
  { name: "Sobre", iconClassName: "fas fa-info-circle", to: "/sobre" },
  {
    name: "Tutorial",
    iconClassName: "fas fa-graduation-cap",
    to: "/tutorial",
  },
  { name: "Notificações", iconClassName: "far fa-bell", to: "/notificacoes" },
];

const SideMenu = (props) => {
  /* State responsible for controlling the opening/closing of the sidebar */
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem (responsible for changing the class of menu items to a specific CSS styling)*/
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <i className="fas fa-react"></i>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i class="far fa-times-circle"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <SearchBar />
      </div>
      <div className="divider"></div>
      <div className="main-menu">
        {!inactive ? (
             <ul>
                {props.children}
            </ul>
            ):(<ul></ul>)}
      </div>

      <div className="side-menu-footer">
        <div className="side-menu-footer-logo">
          <img src="..\..\images\lmmp_logo.jpg" alt="logo_1" className="side-footer-img" />
          <img src="" alt="logo_2" className="side-footer-img" />
        </div>
        <div className="side-footer-bttn">
          {fotterIcons.map((item) => (
            <Link to={item.to}>
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

export default SideMenu;

