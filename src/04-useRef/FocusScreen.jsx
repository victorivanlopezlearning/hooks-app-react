import { useRef } from 'react';

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">Focus Screen</h1>

      <form className="mt-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"
            id="name"
            name="name"
            ref={inputRef}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={onClick}
        >
          Set focus</button>
      </form>
    </div>
  )
}
