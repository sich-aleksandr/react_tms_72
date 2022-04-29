import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TasksActionCreators } from "../../../store";
import "./add-todo.css";

const AddTodo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const addTask = (body) => dispatch(TasksActionCreators.addTask(body));

  const onValueChange = ({ target }) => {
    setText(target.value);
  };

  const onAdd = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="add-panel">
      <form>
        <input
          type="text"
          className="add-input"
          placeholder="What we need Todo?"
          onChange={onValueChange}
          value={text}
        />
        <button type="button" onClick={onAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
