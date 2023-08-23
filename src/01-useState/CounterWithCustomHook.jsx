import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, onAdd, onSubtract, onReset } = useCounter();

  return (
    <div className="container mt-5">
      <h1 className="text-center">Counter with hook <span className="d-block">{counter}</span></h1>

      <div className="mt-3 d-flex justify-content-center">
        <button
          className="btn btn-primary me-3"
          onClick={() => onAdd(2)}
        >Add 1</button>
        <button
          className="btn btn-danger me-3"
          onClick={onReset}
        >Reset</button>
        <button
          className="btn btn-primary"
          onClick={() => onSubtract(2)}
        >Subtract 1</button>
      </div>
    </div>
  )
}
