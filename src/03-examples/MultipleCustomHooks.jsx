import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";

export const MultipleCustomHooks = () => {

  const { counter, onAdd } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">Breaking Bad Quotes</h1>

      {
        (isLoading)
          ? (
            <LoadingQuote />
          )
          : (
            <figure className="text-center mt-4">
              <blockquote className="blockquote">
                <p>{quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">{author}</cite>
              </figcaption>
            </figure>
          )
      }

      <div className="d-flex justify-content-center mt-4">
        <button
          type="button"
          disabled={isLoading}
          className="btn btn-warning"
          onClick={() => onAdd()}
        >
          Siguiente</button>
      </div>
    </div>
  )
}