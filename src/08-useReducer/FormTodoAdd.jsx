import { useState } from "react"
import { AlertError } from "./AlertError";

export const FormTodoAdd = ({ addNewTodo }) => {

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const descriptionTodo = inputValue.trim();

    if ([descriptionTodo].includes('')) {
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
    setInputValue('');
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
          placeholder="Escribe tú tarea"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
