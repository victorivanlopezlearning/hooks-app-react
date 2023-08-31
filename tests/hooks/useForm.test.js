import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Tests in useForm', () => {

  const initialForm = {
    name: 'Víctor Iván',
    email: 'vlopez@vilgweb.com'
  };

  test('Should return values for default', () => {

    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('Should change value from the form', () => {

    const newValue = 'Juan Escutia';

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue
        }
      });
    });

    expect(result.current.formState.name).toBe(newValue);
  });

  test('Should reset values from the form', () => {

    const newValue = 'Juan Escutia';

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue
        }
      });
      onResetForm();
    });

    expect(result.current.formState.name).toBe(initialForm.name);
  });
});