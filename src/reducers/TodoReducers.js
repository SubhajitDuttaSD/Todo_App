const TodoReducer = (state = { todos: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      return { ...state, todos: payload };

    case "DELETE_TODO":
      return { ...state, todos: payload };

    default:
      return state;
  }
};

export default TodoReducer;
