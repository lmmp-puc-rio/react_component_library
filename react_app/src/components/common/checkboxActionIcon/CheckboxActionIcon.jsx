// CheckboxActionIcon = Component to render the checkboxes

// # Import Component Style
import "./CheckboxActionIcon.css";

function CheckboxActionIcon(props) {

  const rows = props.rows
  const setRows = props.setRows

  const rowSelected = props.rowSelected
  const rowID = props.rowID

  /*  Function that controls the checkbox(id) (Selected/ Unselected) and change the state of the selected line */
  function handleClickChecked(id) {
    let updatedList = rows.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setRows(updatedList);
  }

  return (
    <input
      type="checkbox"
      className="input-radio"
      checked={rowSelected}
      onClick={() => handleClickChecked(rowID)}
    />
  );
}

export default CheckboxActionIcon;
