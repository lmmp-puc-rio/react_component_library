import React, {useState} from 'react';
import './TreeComponent.css'



function TreeComponent(props) {
    
    const[show,setShow]=useState(false);
    const toggleMenu = () => {
        setShow(!show);    
      }
    const name = props.name;
    const data = props.data;
    const sign = show ? <i class="fas fa-folder-open"></i> :  <i class="fas fa-folder"></i> 

    const treeWrap = data.map((item)=>{
                  if(item.info === null) {
                    return(
                      <div className='itemTree'>
                      <i class="far fa-folder"></i>
                      {item.name}<br/>
                      </div>
                    )  
                  } else {
                  return(<>
                    <TreeComponent name={item.name} data={item.info}/> </>  )
                  }
                });     
 
    return (
              
      <div className='TreeComponent'>
          <button onClick={toggleMenu}>
            {sign}
            {name}
          </button> 
          {show && treeWrap}
      </div>
            
        )
    
}

export default TreeComponent;