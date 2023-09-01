import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Tests in <TodoItem />', () => {

  const todo = {
    id: 1,
    description: 'Localizar nave de Thor',
    done: false
  };

  const removeTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks()); // Resetear mocks despues de cada prueba

  test('Should show the pending todo', () => {

    render(
      <TodoItem
        todo={todo}
        removeTodo={removeTodoMock}
        toggleTodo={toggleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.textContent).toBe(todo.description);
    expect(spanElement.className).toContain('user-select-none');
    expect(spanElement.className).not.toContain('text-decoration-line-through text-secondary');
  });

  test('Should show the completed todo', () => {

    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        removeTodo={removeTodoMock}
        toggleTodo={toggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    expect(spanElement.textContent).toBe(todo.description);
    expect(spanElement.className).toBe('user-select-none text-decoration-line-through text-secondary');
  });

  test('Span should call toggleTodo when do double click', () => {

    render(
      <TodoItem
        todo={todo}
        removeTodo={removeTodoMock}
        toggleTodo={toggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    fireEvent.doubleClick(spanElement);

    expect(toggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('Button should call removeTodo when do click', () => {

    render(
      <TodoItem
        todo={todo}
        removeTodo={removeTodoMock}
        toggleTodo={toggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(removeTodoMock).toHaveBeenCalledWith(todo.id);
  });
});