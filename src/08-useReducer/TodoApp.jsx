import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { FormTodoAdd } from './FormTodoAdd';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const TodoApp = () => {

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

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

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4 text-uppercase">TODO App</h1>

      <div className="row">
        <div className="col-md-5">
          <h3 className='fw-bold'>Agregar nueva tarea</h3>

          <FormTodoAdd addNewTodo={addNewTodo} />
        </div>

        <div className="col-md-7">
          <h3 className='fw-bold'>Listado de tareas</h3>

          {
            todos.length
              ? <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
              : <p>Agrega tu primer tarea.</p>
          }
        </div>
      </div>

    </div>
  )
}
