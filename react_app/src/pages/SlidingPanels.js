import React from "react";
import { SlidingPanel } from "../components/common";
import TreeComponent from "../components/common/treeComponent";

/* Data */
import {  dynamicTreeData } from "../data/treeInfo";

const SlidingPanels = () => {
  return (
    <div>
      <SlidingPanel>
        <TreeComponent
          name={dynamicTreeData.name}
          data={dynamicTreeData.info}
        />
      </SlidingPanel>
    </div>
  );
};

export default SlidingPanels;
