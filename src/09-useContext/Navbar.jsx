import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-center align-items-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/" end
              className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active' : ''}`}
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active' : ''}`}
            >
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active' : ''}`}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

