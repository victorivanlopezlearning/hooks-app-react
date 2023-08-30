import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg mt-5'>
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink
              to="/" end
              className={({ isActive }) => isActive
                ? "nav-link active"
                : "nav-link"}
            >
              Inicio
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => isActive
                ? "nav-link active"
                : "nav-link"}
            >
              Nosotros
            </NavLink>
          </li>
          <li class="nav-item">
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

