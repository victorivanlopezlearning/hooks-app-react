import { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const onMouseEvent = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMouseEvent);

    return () => {
      window.removeEventListener('mousemove', onMouseEvent);
    };
  }, [])

  return (
    <>
      <p className="text-danger">Usuario ya existe</p>
      {JSON.stringify(coords)}
    </>
  )
}
