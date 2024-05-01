import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.Todo);
  const { todos } = todoState;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todoInput));
  };

  const handleRemoveTodo = (todo) => {
    dispatch(RemoveTodoAction(todo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a todo"
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos &&
          todos.map((item) => (
            <li key={item.id}>
              <span>{item.todo}</span>
              <button onClick={() => handleRemoveTodo(item)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);