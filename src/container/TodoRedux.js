import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "../actions/TodoActions";

const TodoRedux = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const todoInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    AddTodoAction(dispatch, todoInput, todos);
    todoInputRef.current.value = "";
  };

  const handleRemoveTodo = (todoObj) => {
    RemoveTodoAction(dispatch, todoObj, todos);
  };

  return (
    <div>
      <header>
        <h2>Todo List App</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          ref={todoInputRef}
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

export default TodoRedux;
