import React from "react";
import { Link, BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import { Accordions } from "../../../pages";
import CardProjects from "../cardProjects";

import "./tabsComponent.css"





  const TabsComponent =(props)  => {
    const data = props.data
    console.log(data)
    return (
      
      <section className="App">
      
      <div className="init">
        
        <Router>
        <div className="Link-Div">
          {data.map((item) => (
          <Link className="Link" to={`/${item.name}`}> {item.name}</Link>

          
          ))}
          </div>
            <div className="component-Div">
          {data.map((item) =>
         <Switch>
          <Route className="option" exact path={`/${item.name}`}> 
              {props.children.map((child)=>{
                  if(child.key == item.id){
                    return(
                      child
                    )
                  }
              })}
          </Route>
         </Switch>
          )}
          </div>
 
        </Router>
        </div>
      </section>
    );
  };
  
  
  
  


export default TabsComponent;