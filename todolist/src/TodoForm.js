import React, { useState } from "react";
import {ReactComponent as CircleBtn} from './assets/circle.svg';
import "./input.scss";
function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let textInput = event.target.value;
    setText(textInput);
  }
  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    } else {
      alert("Insira um evento!");
    }
  }

  return (
      <form id="todoForm" className="d-flex shadow-sm bg-white align-items-center p-2 rounded position-absolute top-100 start-50 translate-middle">
        <button className="btn btnComponent" onClick={addItem}>
          <CircleBtn></CircleBtn>
        </button>
        <input type="text"  placeholder="Adicione um novo todo . . ." className="form-control" onChange={handleChange} value={text}></input>
        
      </form>
 
  );
}
export default TodoForm;
