import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  // Cuando se trabajan con funciones en react en cada renderizado apuntan a diferentes espacios de memoria y React lo toma como una función diferente. Para eso se utiliza el useCallback() para que React detecte que es la misma función y no la vuelva a renderizar

  const increment = useCallback(
    () => {
      setCounter((value) => value + 1);
    },
    [],
  )

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">useCallback Hook: <span className="d-block">{counter}</span></h1>

      <div className="mt-3 d-flex justify-content-center">
        <ShowIncrement increment={increment} />
      </div>
    </div>
  )
}
