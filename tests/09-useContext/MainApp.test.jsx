import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "../../src/09-useContext/routesConfig";

describe('Tests in <MainApp />', () => {
  test('Should show HomePage', () => {

    const router = createMemoryRouter(routesConfig, { initialEntries: ['/'], });

    render(<RouterProvider router={router} />);

    const {textContent} = screen.getByRole('heading', {level: 2});

    expect(textContent).toBe('Home');
  });

  test('Should show LoginPage', () => {

    const router = createMemoryRouter(routesConfig, { initialEntries: ['/login'], });

    render(<RouterProvider router={router} />);

    const {textContent} = screen.getByRole('heading', {level: 2});

    expect(textContent).toBe('Login');
  });
});