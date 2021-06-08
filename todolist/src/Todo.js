import React from "react";
import { useState,useEffect } from "react";
import List from "./List";
import TodoForm from "./TodoForm";
import Item from "./Item";
import "./input.scss";

function Todo(props) {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    let savedItems =JSON.parse( localStorage.getItem("savedItems"));
    if (savedItems) {
      setItems(savedItems);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("savedItems",JSON.stringify(items));
  },[items])

  function onAddItem(text) {
    let it = new Item(text);
    setItems([...items, it]);
  }
  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id !== item.id);
    setItems(filteredItems);
  }

  function onArrayItemsDeleted(itemsArray) {
    let idFilter = itemsArray.map(itemId=>{return itemId.id;})
    let filteredArrayItems = items.filter((it)=> !idFilter.includes(it.id));
    setItems(filteredArrayItems);
  }

  function onDone(item) {
    let updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updatedItems);
  }
  return (
    <div className="d-flex flex-column">
      <div
        className="container-fluid mb-2 d-flex flex-column p-3 position-relative"
        id="teste"
      >
        <div className="d-flex flex-column">
          <h1>T O D O </h1>
          <TodoForm onAddItem={onAddItem}></TodoForm>
        </div>
      </div>

      <div id="listDiv" className="d-flex bg-white shadow rounded mt-4 w-75 align-self-center ">
        <List
          onDone={onDone}
          onItemDeleted={onItemDeleted}
          onArrayItemsDeleted={onArrayItemsDeleted}
          items={items}
        ></List>
      </div>
    </div>
  );
}

export default Todo;
