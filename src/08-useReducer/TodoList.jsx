import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, removeTodo, toggleTodo, todosCount, pendingTodosCount }) => {
  return (
    <ul className="list-group">
      {
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))
      }

      <div className='mt-2'>
        <p className='fst-italic'>
          <span>{todosCount}</span> Total
          -
          <span>{pendingTodosCount}</span> Pendiente(s)
        </p>
      </div>
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};