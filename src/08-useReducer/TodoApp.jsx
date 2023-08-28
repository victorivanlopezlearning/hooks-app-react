import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

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

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4 text-uppercase">TODO App</h1>

      <div className="row">
        <div className="col-md-5">
          <h3 className='fw-bold'>Agregar Tarea</h3>
          <form className='mb-3 mb-md-0'>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe una nueva tarea"
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Agregar tarea</button>
          </form>
        </div>

        <div className="col-md-7">
          <h3 className='fw-bold'>Listado de Tareas</h3>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Item 1</span>
              <button className='btn btn-danger'>Eliminar</button>
            </li>
          </ul>
          <div className='mt-2'>
            <p className='fst-italic'>
              <span>10</span> Completada(s) 
              - 
              <span>1</span> Pendiente(s)
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
