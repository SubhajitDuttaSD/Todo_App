import React from "react";

const TodoList = ({ todos, handleEdit, handleRemove }) => {
  return (
    <ul className="all-todos">
      {todos &&
        todos.map((item) => {
          return (
            <li className="single-todo" key={item.id}>
              <span className="todo-text">{item.todo}</span>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleRemove(item.id)}>Delete</button>
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
