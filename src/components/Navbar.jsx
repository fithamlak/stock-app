import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="about">About</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
