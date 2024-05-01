import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> {editId ? "Edit" : "Submit"}</button>
    </form>
  );
};

export default TodoForm;
