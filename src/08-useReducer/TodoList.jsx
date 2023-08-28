import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      }

      <div className='mt-2'>
        <p className='fst-italic'>
          <span>{todos.length}</span> Total
          -
          <span>1</span> Pendiente(s)
        </p>
      </div>
    </ul>
  )
}
