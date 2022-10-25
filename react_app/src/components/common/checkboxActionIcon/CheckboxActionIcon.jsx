// CheckboxActionIcon = Component to render the checkboxes

// # Import Component Style
import "./CheckboxActionIcon.css";

function CheckboxActionIcon(props) {
  /*  Function that controls the checkbox(id) (Selected/ Unselected) and change the state of the selected line */
  function handleClickChecked(id) {
    let updatedList = props.data.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    props.selectCallback(updatedList);
  }

  return (
    <input
      type="checkbox"
      className="input-radio"
      checked={props.rowSelected}
      onClick={() => handleClickChecked(props.rowID)}
    />
  );
}

export default CheckboxActionIcon;
