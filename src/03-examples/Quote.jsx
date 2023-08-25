import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {

  // const pRef = useRef();
  // const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // useLayoutEffect(() => {
  //   const { width, height } = pRef.current.getBoundingClientRect();
  //   setBoxSize({ width, height });
  // }, [quote])

  return (
    <figure className="text-center mt-4">
      <blockquote className="blockquote">
        <p 
        // ref={pRef}
        >{quote}</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        <cite title="Source Title">{author}</cite>
      </figcaption>

      {/* <code>{JSON.stringify(boxSize)}</code> */}
    </figure>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};