import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Hay vamos...');
  };

  return `${iterationNumber} realizadas`;
};

export const MemoHook = () => {

  const { counter, onAdd } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div className="container mt-5">
      <h1 className="text-center">Counter <span className="d-block">{counter}</span></h1>

      <h4>{memorizedValue}</h4>

      <div className="mt-3 d-flex justify-content-center">
        <button
          className="btn btn-primary me-3"
          onClick={() => onAdd()}
        >
          Add 1
        </button>

        <button
          className="btn btn-outline-primary"
          onClick={() => setShow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    </div>
  )
}
