import React from "react";

const TabContent = ({ id, activeTab, children, isModalOpen }) => {
  console.log(isModalOpen);
  return activeTab === id ? (
    <div className="TabContent">{children}</div>
  ) : null;

};

export default TabContent;
