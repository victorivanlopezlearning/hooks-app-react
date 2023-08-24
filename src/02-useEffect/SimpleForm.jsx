import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Víctor Iván',
    email: 'vlopez@vilgweb.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log('useEffect called');
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">Formulario de Contacto</h1>

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
        <div>
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
      </form>

      {(username === 'Víctor Iván López') && <Message />}

    </div>
  )
}