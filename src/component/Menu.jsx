import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
     
    </nav>
  );
};

export default Menu;
