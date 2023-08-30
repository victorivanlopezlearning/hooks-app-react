import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { Navbar } from './';

export const MainApp = () => {
  return (
    <UserProvider>
      <div className="container mt-5">
        <header>
          <h1 className="text-center fw-bold">MainApp</h1>

          <Navbar />
        </header>

        <main className="mt-5">
          <Outlet />
        </main>
      </div>
    </UserProvider>
  )
}
