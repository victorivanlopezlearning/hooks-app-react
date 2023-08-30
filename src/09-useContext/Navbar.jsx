import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg mt-5'>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/" end
              className={({ isActive }) => isActive
                ? "nav-link active"
                : "nav-link"}
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => isActive
                ? "nav-link active"
                : "nav-link"}
            >
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) => isActive
                ? "nav-link active"
                : "nav-link"}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

