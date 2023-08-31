import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Tests in useCounter', () => {
  test('Should return values for default', () => {

    const { result } = renderHook(() => useCounter());
    const { counter, onAdd, onReset, onSubtract } = result.current;

    expect(counter).toBe(0);
    expect(onAdd).toEqual(expect.any(Function)); // Validar que se reciba función
    expect(onReset).toEqual(expect.any(Function));
    expect(onSubtract).toEqual(expect.any(Function));
  });

  test('Should return counter with a value of 100', () => {

    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Should increment the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { onAdd } = result.current;

    act(() => {
      onAdd(5);
      onAdd();
    });

    expect(result.current.counter).toBe(106); // Se valida el valor actual del counter
  });

  test('Should decrement the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { onSubtract } = result.current;

    act(() => {
      onSubtract(5);
    });

    expect(result.current.counter).toBe(95);
  });

  test('Should reset the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { onReset, onAdd } = result.current;

    act(() => {
      onAdd(10);
      onReset();
    });

    expect(result.current.counter).toBe(100);
  });
});