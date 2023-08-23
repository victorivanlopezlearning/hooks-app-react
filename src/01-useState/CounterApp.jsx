import { useState } from 'react';

export const CounterApp = () => {

  const [counter, setCounter] = useState({
    counter1: 0,
    counter2: 10,
    counter3: 20,
  });

  const { counter1, counter2, counter3 } = counter;

  return (
    <div className="container mt-5">
      <h2>Counter 1: {counter1}</h2>
      <h2>Counter 2: {counter2}</h2>
      <h2>Counter 3: {counter3}</h2>
      <button
        className="btn btn-primary mt-3"
        onClick={() => setCounter({ ...counter, counter1: counter1 + 1 })}
      >Add</button>
    </div>
  )
}