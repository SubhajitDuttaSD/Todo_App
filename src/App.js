import React, { useState } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

// import store from "./store";
// import TodoRedux from "./container/TodoRedux";

const App = () => {
  // return <TodoRedux />;
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((item) => item.id === editId);
      const updatedTodos = todos.map((item) =>
        item.id === editTodo.id
          ? (item = { id: item.id, todo })
          : { id: item.id, todo: item.todo }
      );
      setTodos([...updatedTodos]);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos((prev) => [{ id: `${todo}-${Date.now()}`, todo }, ...prev]);
      setTodo("");
    }
  };

  const handleEdit = (todoId) => {
    const editTodo = todos.find((item) => item.id === todoId);
    setTodo(editTodo.todo);
    setEditId(todoId);
  };

  const handleRemove = (todoId) => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
        />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

root.render(<App />);
