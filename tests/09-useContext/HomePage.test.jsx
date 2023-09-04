import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Tests in <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Víctor Iván López',
    email: 'vlopez@vilgweb.com'
  };

  test('Should show the component whitout user', () => {

    render(
      <UserContext.Provider
        value={{ user: null }} // React no renderiza valores null en el HTML pero si en Jest
      >
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); // aria-label

    expect(preTag.textContent).toBe('null');
  });

  test('Should show the component with user', () => {

    render(
      <UserContext.Provider
        value={{ user }}
      >
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.textContent).toContain(user.id.toString());
    expect(preTag.textContent).toContain(user.name);
    expect(preTag.textContent).toContain(user.email);
  });
});