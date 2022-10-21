import react from "react";
import Plot from "react-plotly.js";
import './pages.css'
const Plotly = () => {
const graph = [
    {x:[0,10],
     y:[8,8],
     //type change the mode graph
    type:"scratter",
    mode:"lines",
    fill:'tozeroy'
    },
    {   x:[6,8,7],
        y:[5,5,7],
      //type change the mode graph
       type:"bar",
       mode:"lines",
       fill:'tozeroy'
       },
       { x:[0,10],
         y:[3,3],
      //type change the mode graph
       type:"scatter",
       mode:"line",
       fill:'tozeroy'
       },
 ]
    return(
        <div className="Plotly">

        <Plot data={graph}/> 
        </div>
    )
}

export default Plotly;