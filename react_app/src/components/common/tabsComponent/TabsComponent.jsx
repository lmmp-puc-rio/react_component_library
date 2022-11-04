import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./tabsComponent.css";

const TabsComponent = (props) => {
  const data = props.data;
  const [select, setSelect] = useState();

  return (
    <div className="tab">
      <div className="tabs__list">
        <Router>
          <div>
            {data.map((item) => (
              <Link className="tabs__item" to={`/${item.name}`}>
                {" "}
                {item.name}{" "}
              </Link>
            ))}
          </div>
          <div className="tabs__container">
            {data.map((item) => (
              <Switch>
                <Route className="tabs__container" exact path={`/${item.name}`}>
                  {props.children.map((child) => {
                    if (child.key == item.id) {
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
