import { useState } from "react";

export const useCounter = (initialValue = 0) => {

  const [counter, setCounter] = useState(initialValue);

  const onAdd = (step = 1) => {
    setCounter(counter + step);
  };

  const onSubtract = (step = 1) => {
    if (counter === 0) return;
    setCounter(counter - step);
  };

  const onReset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    onAdd,
    onSubtract,
    onReset,
  }
}
