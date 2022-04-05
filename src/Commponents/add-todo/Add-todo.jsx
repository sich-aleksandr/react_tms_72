import React from "react";
import "./add-todo.css";

const AddTodo = () => {
  return (
    <div className="add-panel">
      <form>
        <input type="text" className="add-input" placeholder="What we need Todo?" />
        <button type="button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
