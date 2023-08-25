import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('Me volví a renderizar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Add 1
    </button>
  )
})