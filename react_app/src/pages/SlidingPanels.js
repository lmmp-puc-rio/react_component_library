import React from "react";

// #  Local SubComponents & utils
import { SlidingPanel, TreeComponent } from "../components/common";

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
