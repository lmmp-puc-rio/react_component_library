import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tabsComponent.css";

const TabsComponent = (props) => {
  const data = props.data;
  const history = useHistory();

  return (
    <div className="tab">
      <div className="tabs__list">
        <Router>
          <div className="tab-header">
            {data.map((item) => (
              <Link className="tabs__item" to={`${history.location.pathname}/${item.name}`} >
                {" "}
                {item.name}{" "}
              </Link>
            ))}
          </div>
          <div className="tabs__container">
            {data.map((item) => (
              <Switch>
                <Route className="tabs__container" path={`${history.location.pathname}/${item.name}`}>
                  {props.children.map((child) => {
                    if (child.key === item.id) {
                      return child;
                    }
                  })}
                </Route>
              </Switch>
            ))}
          </div>
        </Router>
      </div>
    </div>
  );
};

export default TabsComponent;
