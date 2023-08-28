import { useState } from 'react'
import { AlertError } from './AlertError';
import { useForm } from '../hooks';

export const FormTodoAdd = ({ addNewTodo }) => {

  const { formState, onInputChange, onResetForm } = useForm({
    descriptionTodo: ''
  });
  const [error, setError] = useState(false);

  const { descriptionTodo } = formState;

  const onSubmit = (e) => {
    e.preventDefault();

    if ([descriptionTodo.trim()].includes('')) {
      setError(true);
      return;
    };
    setError(false);

    const newTodo = {
      id: new Date().getTime(),
      description: descriptionTodo,
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
          name="descriptionTodo"
          placeholder="Escribe tú tarea"
          value={descriptionTodo}
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
