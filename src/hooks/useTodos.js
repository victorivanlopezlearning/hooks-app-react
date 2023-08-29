import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const useTodos = () => {

  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || []);
  }, [todos]);

  const addNewTodo = (newTodo) => {
    const action = {
      type: 'Add Todo',
      payload: newTodo
    };

    dispatchTodo(action);
  };

  const removeTodo = (id) => {
    const action = {
      type: 'Remove Todo',
      payload: id
    };

    dispatchTodo(action);
  };

  const toggleTodo = (id) => {
    const action = {
      type: 'Toggle Todo',
      payload: id
    };

    dispatchTodo(action);
  };

  const todosCount = todos.length;

  const pendingTodosCount = todos.filter(todo => !todo.done).length;

  return {
    todos,
    addNewTodo,
    removeTodo,
    toggleTodo,
    todosCount,
    pendingTodosCount,
  }
}
