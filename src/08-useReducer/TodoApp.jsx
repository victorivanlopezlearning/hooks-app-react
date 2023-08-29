import { TodoList } from './TodoList';
import { FormTodoAdd } from './FormTodoAdd';
import { useTodos } from '../hooks';


export const TodoApp = () => {

  const { todos, addNewTodo, removeTodo, toggleTodo, todosCount, pendingTodosCount } = useTodos();

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4 text-uppercase">TODO App</h1>

      <div className="row">
        <div className="col-md-5">
          <h3 className='fw-bold'>Agregar nueva tarea</h3>

          <FormTodoAdd addNewTodo={addNewTodo} />
        </div>

        <div className="col-md-7">
          <h3 className='fw-bold'>Listado de tareas</h3>

          {
            todos.length
              ? <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                todosCount={todosCount}
                pendingTodosCount={pendingTodosCount}
              />
              : <p>Agrega tu primer tarea.</p>
          }
        </div>
      </div>

    </div>
  )
}
