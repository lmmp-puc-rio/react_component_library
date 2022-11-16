// ExpandableGrid = Component to render header and body of tables

// # Main Import
import React, { useContext } from "react";

// #  Local SubComponents & utils
import { CheckboxActionIcon } from "../index";

// # Import Component Style
import "./ExpandableGrid.css";

// # Contexts
import { ActionFabGridContext } from "../../../contexts/ActionFabGridContext";

// # Expandable Action Column React Component Construction
function ActionColumn(props) {
  const actions = props.actions;
  const id = props.id;
  const rowSelected = props.rowSelected;
  const selectCallback = props.selectCallback;
  const data = props.data;

  return (
    <td className="expandable_grid_actions_column">
      {actions.map((action) => (
        <CheckboxActionIcon
          data={data}
          callback={action.callback}
          rowID={id}
          selectCallback={selectCallback}
          rowSelected={rowSelected}
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
  const selectCallback = props.selectCallback;
  const metaData = props.metaData;
  const data = props.data;
  /* Map just to find the keys of each header */
  const rowOrder = metaData.header.map((index) => index.key);

  return (
    // Case Row assembled by Action Icons and Other Fields
    <tr
      key={"casegrid_row_" + rowdata.id}
      className="caseRow"
      id={["case_" + rowdata.id]}
    >
      {/* Action Column */}
      <ActionColumn
        actions={actions}
        id={rowdata.id}
        rowSelected={rowdata.selected}
        selectCallback={selectCallback}
        data={data}
      />
      {/* Regular Column $TODO: Separate Columns and Expandable Columns */}
      {rowOrder.map((key) => (
        <td key={"casegrid_row" + rowdata.id + "_column" + key}>
          {rowdata[key]}
        </td>
      ))}
    </tr>
  );
}

// # Expandable Grid React Component Construction
function ExpandableGrid(props) {
  const metaData = props.metaData;
  const selectCallback = props.selectCallback;
  const data = props.data;

  /* State that controls the checkbox of the table header and selects all checkboxes */
  const { isSelectAllChecked, setSelectAllChecked } =
    useContext(ActionFabGridContext);

  /*  Function that controls all checkboxes(Selected/ Unselected) and change the state*/
  function selectAllRows() {
    let updatedList = data.map((item) => {
      if (isSelectAllChecked === true) {
        return { ...item, selected: false };
      }
      return { ...item, selected: true };
    });
    selectCallback(updatedList);
    setSelectAllChecked(!isSelectAllChecked);
  }

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
                className="checkbox-header"
                checked={isSelectAllChecked}
                onClick={selectAllRows}
              />
            </th>
            {metaData.header.map((columnLabel) => (
              <th key={columnLabel.key}>{columnLabel.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <ExpandableRow
              actions={metaData.actions}
              metaData={metaData}
              rowData={row}
              data={data}
              selectCallback={selectCallback}
            />
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
