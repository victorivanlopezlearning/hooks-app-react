import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests in <MultipleCustomHooks />', () => {

  const mockOnAdd = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    onAdd: mockOnAdd
  });

  beforeEach(() => { // Función para indicar que hacer despues de cada prueba
    jest.clearAllMocks(); // Limpiar los mocks despues de cada prueba
  });

  test('Should show the component for default', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const { textContent } = screen.getByRole('heading', { level: 1 });
    expect(textContent).toBe('Breaking Bad Quotes');

    expect(screen.getByText('Cargando...')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    expect(nextButton.disabled).toBeTruthy();
  });

  test('Should show a Quote', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Víctor Iván', quote: 'Hola mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Hola mundo')).toBeTruthy();
    expect(screen.getByText('Víctor Iván')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('Should call the increment function (onAdd)', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Víctor Iván', quote: 'Hola mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Siguiente' });

    fireEvent.click(nextButton);

    expect(mockOnAdd).toHaveBeenCalled();
  });
});