import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Tests in <LoginPage />', () => {
  test('Should show the component without user', () => {
    render(
      <UserContext.Provider
        value={{ user: null }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.textContent).toBe('null');
  });

  test('should call setUser function when do Click on button', () => {

    const setUserMock = jest.fn();
    
    render(
      <UserContext.Provider
        value={{ user: null, setUser: setUserMock }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'juan@google.com' });
  });
});