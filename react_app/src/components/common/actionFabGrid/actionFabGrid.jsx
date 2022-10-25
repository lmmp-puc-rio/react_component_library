// ActionFabGrid = Component responsible for controlling the ExpandableGrid and FAB

// #  Main Imports
import React, { useEffect, useContext } from "react";

// # Contexts
import { ActionFabGridContext } from "../../../contexts/ActionFabGridContext";

// #  Local SubComponents & utils
import { ExpandableGrid, FAB } from "../index";

// # Import Component Style
import { darkColors, lightColors } from "../MaterialColors";

function ActionFabGrid(props) {
  const {
    isSelectAllChecked,
    countSelectRows,
    setCountSelectRows,
    rows,
    setRows,
  } = useContext(ActionFabGridContext);

  const metaData = props.metaData;

  useEffect(() => {
    /*     Function responsible for counting the selected lines */
    function countSelect() {
      const count = rows.filter((item) => item.selected === true);
      setCountSelectRows(count.length);
    }
    countSelect();
    controlsActionButton();
  }, [rows]);

  /* Function responsible for controlling the rendering of the FAB */
  function controlsActionButton() {
    let actionData = {};
    if (!isSelectAllChecked && !countSelectRows) {
      actionData = {
        actionButtom: {
          tootip: "Grupo de Ações",
          icon: "fas fa-plus",
          rotate: true,
          backgroundColor: darkColors.blue,
          color: lightColors.white,
          /* Direction: Array responsible for determining the opening position of the FAB */
          direction: ["fab-container-left"],
        },
        actions: [
          {
            tooltip: "",
            icon: "",
            key: "action0",
            url: "/",
            backgroundColor: "",
            color: "",
          },
        ],
      };
    } else if (isSelectAllChecked || countSelectRows > 1) {
      actionData = {
        actionButtom: {
          tootip: "Grupo de Ações",
          icon: "fas fa-plus",
          rotate: true,
          backgroundColor: darkColors.blue,
          color: lightColors.white,
          /* Direction: Array responsible for determining the opening position of the button */
          direction: ["fab-container-left"],
        },
        actions: [
          {
            tooltip: "Delete",
            icon: "fas fa-trash",
            key: "action0",
            url: "/",
            backgroundColor: darkColors.red,
            color: lightColors.white,
          },
          {
            tooltip: "Duplicate",
            icon: "fas fa-copy",
            key: "action1",
            url: "/",
            backgroundColor: darkColors.blue,
            color: lightColors.white,
          },
        ],
      };
    } else {
      actionData = {
        actionButtom: {
          tootip: "Grupo de Ações",
          icon: "fas fa-plus",
          rotate: true,
          backgroundColor: darkColors.blue,
          color: lightColors.white,
          /* Direction: Array responsible for determining the opening position of the button */
          direction: ["fab-container-left"],
        },
        actions: [
          {
            tooltip: "Delete",
            icon: "fas fa-trash",
            key: "action0",
            url: "/",
            backgroundColor: darkColors.red,
            color: lightColors.white,
          },
          {
            tooltip: "Duplicate",
            icon: "fas fa-copy",
            key: "action1",
            url: "/",
            backgroundColor: darkColors.blue,
            color: lightColors.white,
          },
          {
            tooltip: "Edit",
            icon: "fas fa-edit",
            key: "action2",
            url: "/",
            backgroundColor: darkColors.yellow,
            color: lightColors.white,
          },
        ],
      };
    }
    return actionData;
  }

  return (
    <div className="page" style={{ color: "black" }}>
      <ExpandableGrid
        metaData={metaData}
        data={rows}
        selectCallback={setRows}
      />
      <FAB data={controlsActionButton()} />
    </div>
  );
}

export default ActionFabGrid;
