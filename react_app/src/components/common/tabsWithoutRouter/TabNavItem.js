
import React from "react";


const TabNavItem = ({ id, title, activeTab, setActiveTab, setIsModalOpen }) => {
 
 const handleClick = () => {
  if(title === "Formulário Avançado") {
    setIsModalOpen(true)
  }
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default TabNavItem;