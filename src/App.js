import React, { useState, useContext } from "react";
import "./App.css";
import ListItems from "./ListItems";
import { ContextProvider } from "./ContextProvider";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useContext(ContextProvider);

  const deleteItem = (itemToBeDeleted) => {
    var newItems = items.filter((list) => list !== itemToBeDeleted);
    setItems(newItems);
  };

  const addToList = (e) => {
    e.preventDefault();
    console.log(e);
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>To Do To Do To Do To Do To Doooo</h1>
        <form>
          <input
            value={input}
            onChange={(e) =>
              e.target.value === "null"
                ? setInput("")
                : setInput(e.target.value)
            }
            placeholder="Enter an item to ADD"
            type="text"
          />
          <button onClick={addToList} type="submit">
            ADD
          </button>
        </form>
      </div>
      <div className="app-lists">
        {items.map((item) => (
          <ListItems
            deleteItem={deleteItem.bind(this)}
            key={item}
            text={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
