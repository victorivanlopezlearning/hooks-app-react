import { useState } from 'react'
import { AlertError } from './AlertError';
import { useForm } from '../hooks';

export const FormTodoAdd = ({ addNewTodo }) => {

  const { formState, onInputChange, onResetForm } = useForm({
    description: ''
  });
  const [error, setError] = useState(false);

  const { description } = formState;

  const onSubmit = (e) => {
    e.preventDefault();

    if ([description.trim()].includes('')) {
      setError(true);
      return;
    };
    setError(false);

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    addNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form
      className='mb-3 mb-md-0'
      onSubmit={onSubmit}
    >
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Escribe tú tarea"
          value={description}
          onChange={onInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary"
      >
        Agregar tarea
      </button>
      {error && <AlertError message='El campo es obligatorio' />}
    </form>
  )
}
