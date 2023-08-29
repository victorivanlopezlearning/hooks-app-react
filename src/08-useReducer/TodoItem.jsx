import PropTypes from 'prop-types';

export const TodoItem = ({ todo, removeTodo, onToggleTodo }) => {

  const { id, description, done } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`user-select-none ${(done) ? 'text-decoration-line-through text-secondary' : ''}`}
        onDoubleClick={() => onToggleTodo(id)}
      >
        {description}
      </span>
      <button
        className='btn btn-danger'
        onClick={() => removeTodo(id)}
      >
        <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};