import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about/20/chaman">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/useref">Useref</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/apitest">Apitest</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tryusestate">Try Use State</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/testform">Testform</NavLink>
          </li>
        </ul>
     
    </nav>
  );
};

export default Menu;
