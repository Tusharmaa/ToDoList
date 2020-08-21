import React from "react";
import "./ListItems.css";
import ClearIcon from "@material-ui/icons/Clear";

function ListItems({ text, id, deleteItem }) {
  const strikeout = (e) => {
    const element = e.target;
    console.log(element);
    element.classList.toggle("crossed-line");
  };
  return (
    <div className="listItems">
      <li onClick={strikeout} key={text}>
        {text}
      </li>
      <ClearIcon
        onClick={deleteItem.bind(null, text)}
        className="listItems-delete"
      />
    </div>
  );
}

export default ListItems;

// import { List, ListItem, ListItemText } from "@material-ui/core";

// <List className="listItems">
//   <ListItem>
//     <ListItemText className="listItems-list" primary={text} />
//   </ListItem>
// </List>

// const newItems = items.filter((item, itemIndex) => index !== itemIndex);
//   return setItems([...newItems]);
