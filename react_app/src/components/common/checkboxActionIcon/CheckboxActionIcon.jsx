// CheckboxActionIcon = Component to render the checkboxes

// # Import Component Style
import "./CheckboxActionIcon.css";

function CheckboxActionIcon(props) {
  /*  Function that controls the checkbox(id) (Selected/ Unselected) and change the state of the selected line */

  const rowSelected = props.rowSelected

  console.log(rowSelected)
  function handleClickChecked(id) {
    let updatedList = props.data.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    console.log(updatedList)
    props.selectCallback(updatedList);
  }

  return (
    <input
      type="checkbox"
      className="input-radio"
      checked={rowSelected.selected}
      onClick={() => handleClickChecked(props.rowID)}
    />
  );
}

export default CheckboxActionIcon;
