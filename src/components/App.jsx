import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [newList, setNewList] = useState("");

  function handleList(event) {
    const newTyped = event.target.value;
    console.log(newTyped);
    setNewItem(newTyped);
  }

  function handleClick() {
    setNewList(newList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleList} type="text" value={newItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
          <li>{newList}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
