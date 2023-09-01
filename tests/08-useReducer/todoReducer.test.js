import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Tests in todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }];

  test('Should return the initial state', () => {

    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('Should add a todo', () => {
    
    const action = {
      type: 'Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo Todo',
        done: false,
      }
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload); // toContain() | podemos evaluar que un arreglo tenga el objeto indicado, también evalua que lo esperado sea solo el contenido y no el mismo espacio en memoria
  });

  test('Should remove a todo', () => {

    const action = {
      type: 'Remove Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('Should toggle todo', () => {

    const action = {
      type: 'Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy();
  });
});