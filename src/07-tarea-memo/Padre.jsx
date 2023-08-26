import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(
    (num) => {
      setValor((valor) => valor + num);
    },
    [],
  )

  return (
    <div className='container mt-5'>
      <h1 className='text-center fw-bold'>Padre</h1>
      <p className='text-center fs-4'> Total: {valor} </p>

      <div className="mt-3 d-flex justify-content-center">
        {
          numeros.map(n => (
            <Hijo
              key={n}
              numero={n}
              incrementar={incrementar}
            />
          ))
        }
      </div>
      {/* <Hijo /> */}
    </div>
  )
}
