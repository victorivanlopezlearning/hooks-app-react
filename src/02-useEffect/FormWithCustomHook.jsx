import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">Formulario Custom Hook </h1>

      <form className="mt-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="vlopez@vilgweb.com"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <button
          type="button"
          class="btn btn-danger"
          onClick={onResetForm}
        >
          Reset</button>
      </form>
    </div>
  )
}