import { MainApp, HomePage, LoginPage, AboutPage } from './';


export const routesConfig = [
  {
    path: '/',
    element: <MainApp />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
    ]
  },
];