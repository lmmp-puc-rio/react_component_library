// # Main Import
import React, { useContext } from "react";
import { GridActionIcon } from "../index";

// # Import Component Style
import "./ExpandableGrid.css";

// # Contexts
import { SelectAllContext } from "../../../contexts/SelectAllContext";

// # Expandable Action Column React Component Construction
function ActionColumn(props) {
  const actions = props.actions;
  const id = props.id;

  return (
    <td className="expandable_grid_actions_column">
      {actions.map((action) => (
        <GridActionIcon
          callback={action.callback}
          rowID={id}
          routeURL={action.route}
          tooltip={action.tooltip}
          className={"action_icon_button"}
          backgroundColor={action.backgroundColor}
          color={action.color}
        />
      ))}
    </td>
  );
}

// # Expandable Row React Component Construction
function ExpandableRow(props) {
  const rowdata = props.rowData;
  const actions = props.actions;
  const rowOrder = ["id", "name", "desc", "created", "modified", "lastrun"];

  return (
    // Case Row assembled by Action Icons and Other Fields
    <tr
      key={"casegrid_row_" + rowdata.id}
      className="caseRow"
      id={["case_" + rowdata.id]}
    >
      {/* Action Column */}
      <ActionColumn actions={actions} id={rowdata.id} />
      {/* Regular Column $TODO: Separate Columns and Expandable Columns */}
      {rowOrder.map((key) => (
        <td key={"casegrid_row" + rowdata.id + "_column" + key}>
          {" "}
          {rowdata[key]}{" "}
        </td>
      ))}
    </tr>
  );
}

// # Expandable Grid React Component Construction
function ExpandableGrid(props) {
  const metaData = props.metaData;

  const data = props.data;

  /* State that controls the checkbox of the table header and selects all radio buttons */
  const { isSelectChecked, setSelectChecked } = useContext(SelectAllContext);

  /*  Function that controls the checkbox (Selected/ Unselected) */
  const handleSelectCheked = () => {
    setSelectChecked(!isSelectChecked);
  };

  return (
    // Logo assembled by Icon and Name
    <div key="expandable_grid_container" className="expandable_grid_container">
      <table key="expandable_grid" className="expandable_grid">
        <thead key="expandable_grid_header" className="expandable_grid_header">
          <tr>
            {/*  Header Checkbox */}
            <th>
              <input
                type="checkbox"
                checked={isSelectChecked}
                onClick={handleSelectCheked}
              />
            </th>
            {metaData.header.map((columnLabel) => (
              <th key={columnLabel.key}>{columnLabel.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <ExpandableRow actions={metaData.actions} rowData={row} />
          ))}
        </tbody>
      </table>
      {/* Show message if grid is empty */}
      {data.length === 0 && (
        <div className="expandable_grid_container_empty">
          To add a new case click +
        </div>
      )}
    </div>
  );
}

export default ExpandableGrid;

