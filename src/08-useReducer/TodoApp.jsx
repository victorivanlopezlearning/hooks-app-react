import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { FormTodoAdd } from './FormTodoAdd';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Localizar nave de Thor',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar gema del espacio',
    done: false,
  },
];

export const TodoApp = () => {

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const addNewTodo = (newTodo) => {
    console.log({ newTodo });
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

          <TodoList todos={todos} />
        </div>
      </div>

    </div>
  )
}
