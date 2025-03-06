import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about/20/chaman">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/useref">
            Useref
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/apitest">
            Apitest
          </NavLink>
        </li>
       
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hooks 
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/tryusestate">
                Try Use State
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/tryusestateobj">
                Try Use State Object
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/tryusestatearr">
                Try Use State Array
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/tryusestateform">
                Try Use State Form
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item" to="/tryuseeffect">
                Try Use Effect
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/tryuseeffectwithfunction">
                Try Use Effect with function
              </NavLink>
            </li>
            
            <li>
              <NavLink className="dropdown-item" to="/showproducts">
               Show Products
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Next JS 
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/">
               One
              </NavLink>
            </li>
            </ul>
          </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/testform">
            Testform
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
