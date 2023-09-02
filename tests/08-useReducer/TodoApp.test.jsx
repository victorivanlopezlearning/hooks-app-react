import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Tests in <TodoApp />', () => {

  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: true },
      { id: 2, description: 'Todo #2', done: false },
    ],
    addNewTodo: jest.fn(),
    removeTodo: jest.fn(),
    toggleTodo: jest.fn(),
    todosCount: 2,
    pendingTodosCount: 1
  });

  test('Should show the component correctly', () => {

    render(<TodoApp />);
    
    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByText('Todo #2')).toBeTruthy();
  });
});