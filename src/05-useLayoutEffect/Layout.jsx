import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

  const { counter, onAdd } = useCounter(1);
  const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">Breaking Bad Quotes</h1>

      {
        (isLoading)
          ? <LoadingQuote />
          : <Quote quote={quote} author={author} />
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