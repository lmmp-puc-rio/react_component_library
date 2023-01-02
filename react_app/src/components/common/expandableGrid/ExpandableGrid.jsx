// ExpandableGrid = Component to render header and body of tables

// #  Local SubComponents & utils
import { CheckboxActionIcon } from "../index";

// # Import Component Style
import "./ExpandableGrid.css";

// # Expandable Action Column React Component Construction
function ActionColumn(props) {
  const actions = props.actions;

  const id = props.id;

  const rowSelected = props.rowSelected;
  
  const rows = props.rows;
  const setRows = props.setRows;

  return (
    <td className="expandable-grid__actions--column">
      {actions.map((action) => (
        <CheckboxActionIcon
          rows={rows}
          callback={action.callback}
          rowID={id}
          setRows={setRows}
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
  const metaData = props.metaData;

  const rows = props.rows;
  const setRows = props.setRows;

  const rowdata = props.rowData;

  const actions = props.actions;



  /* Map just to find the keys of each header */
  const rowOrder = metaData.header.map((index) => index.key);

  return (
    // Case Row assembled by Action Icons and Other Fields
    <tr
      key={"casegrid__row_" + rowdata.id}
      className="case__row"
      id={["case_" + rowdata.id]}
    >
      {/* Action Column */}
      <ActionColumn
        actions={actions}
        id={rowdata.id}
        rowSelected={rowdata.selected}
        rows={rows}
        setRows={setRows}
      />
      {/* Regular Column $TODO: Separate Columns and Expandable Columns */}
      {rowOrder.map((key) => (
        <td key={"casegrid__row" + rowdata.id + "_column" + key}>
          {rowdata[key]}
        </td>
      ))}
    </tr>
  );
}

// # Expandable Grid React Component Construction
function ExpandableGrid(props) {
  const metaData = props.metaData;

  const setRows = props.setRows;
  const rows = props.rows;

  const isSelectAllChecked = props.isSelectAllChecked;
  const setSelectAllChecked = props.setSelectAllChecked

    /*  Function that controls all checkboxes(Selected/ Unselected) and change the state*/
    function selectAllRows() {
      setSelectAllChecked(!isSelectAllChecked);
      if (isSelectAllChecked === true) {
        let updatedList = rows.map((item) => {
          
          return { ...item, selected: false};
        });
        setRows(updatedList);
      } else {
        let updatedList = rows.map((item) => {
          return { ...item, selected: true };
        });
        setRows(updatedList);

      }
    }

  return (
    // Logo assembled by Icon and Name
    <div
      key="expandable-grid__container"
      className="expandable-grid__container"
    >
      <table key="expandable-grid__table" className="expandable-grid__table">
        <thead
          key="expandable-grid__header"
          className="expandable-grid__header"
        >
          <tr>
            {/*  Header Checkbox */}
            <th>
              <input
                type="checkbox"
                className="checkbox__header"
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
          {/* Show if grid is empty */}
          {rows.length === 0 ? (
            <div className="expandable-grid__container--empty"></div>
          ) : (
            rows.map((row) => (
              <ExpandableRow
                actions={metaData.actions}
                metaData={metaData}
                rowData={row}
                rows={rows}
                setRows={setRows}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpandableGrid;
