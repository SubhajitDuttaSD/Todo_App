export const AddTodoAction = (dispatch, todoInput, todos) => {
  const hasTodo = todos.find((item) => item.todo === todoInput);

  if (!hasTodo && todoInput !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [{ id: todoInput, todo: todoInput }, ...todos],
    });
  }
};

export const RemoveTodoAction = (dispatch, deleteTodoObj, todos) => {
  dispatch({
    type: "DELETE_TODO",
    payload: todos.filter((item) => item.id !== deleteTodoObj.id),
  });
};
