import { memo } from "react";

export const CounterSpan = memo(({ counter }) => {

  console.log('Me volví a generar');

  return (
    <span className="d-block">{counter}</span>
  )
})
