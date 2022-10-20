import React, {useState} from 'react';
import './TreeComponent.css'



function TreeComponent(props) {
    const data = props.data;
    const[show,setShow]=useState(false);
    const toggleMenu = () => {
        setShow(!show);    
      }
      const name = props.data.name;

    const sign = show ? <i class="fa fa-folder-open" /> :  <i class="fa fa-folder"/> 

      const treeWrap = data.map((item)=>{
      if(item.info === null) {
        return(
          <>
          {item.name}<br/>
          </>
        )  
      } else {
       return(<>
        {item.name}
        <TreeComponent data={item.info}/> </>  )
      }
    })
  
            return (
                      
               <div className='TreeComponent'>
                   <button onClick={toggleMenu}>
         <span>{sign}</span>{name}
          </button> 
                 
                {show && treeWrap}
              
              
                 
                </div>
            
        )
    
}

export default TreeComponent;