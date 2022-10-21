import react from "react";
import Plot from "react-plotly.js";
import './pages.css'
const Plotly = () => {
const graph = [
    {x:[2,5,6],
     y:[2,4,6],
     //type change the mode graph
    type:"scratter",
    mode:"lines",
    },
    {   x:[4,8,9],
        y:[5,8,7],
      //type change the mode graph
       type:"bar",
       mode:"lines",
       },
       {   x:[3,5,10],
        y:[2,7,8],
      //type change the mode graph
       type:"scatter",
       mode:"markers",
       },
 ]
    return(
        <div className="Plotly">

        <Plot data={graph}/> 
        </div>
    )
}

export default Plotly;