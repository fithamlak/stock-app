import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Stoks</NavLink></li>
      <li><NavLink to="show">Show</NavLink></li>
      <li><NavLink to="about">About</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
