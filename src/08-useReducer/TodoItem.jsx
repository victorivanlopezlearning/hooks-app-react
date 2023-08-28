import PropTypes from 'prop-types';

export const TodoItem = ({ todo }) => {

  const { description } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{description}</span>
      <button className='btn btn-danger'>
        <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};