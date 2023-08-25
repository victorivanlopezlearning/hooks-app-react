import { useState } from 'react';
import { useCounter } from '../hooks';
import { CounterSpan } from './CounterSpan';

export const Memorize = () => {

  const { counter, onAdd } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Counter <CounterSpan counter={counter} /></h1>

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
