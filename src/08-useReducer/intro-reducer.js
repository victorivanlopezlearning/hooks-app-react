
// Estado inicial
const initialState = [{
  id: 1,
  todo: 'Localizar nave de Thor',
  done: false,
}];

// Reducer
const todoReducer = (state = initialState, action = {}) => {

  if (action.type === '[TODO] add todo') {
    return [...state, action.payload]
  }

  return state;
};

let todos = todoReducer();

// Nuevo todo
const newTodo = {
  id: 2,
  todo: 'Conseguir gema del espacio',
  done: false,
}

// Acción para añadir nuevo todo
const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}

// Agregar nuevo todo
todos = todoReducer(todos, addTodoAction);

console.log(todos);