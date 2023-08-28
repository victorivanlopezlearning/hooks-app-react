import PropTypes from 'prop-types';

export const AlertError = ({ message }) => {
  return (
    <div className="alert alert-danger mt-2" role="alert">
      {message}
    </div>
  )
}

AlertError.propTypes = {
  message: PropTypes.string.isRequired,
};