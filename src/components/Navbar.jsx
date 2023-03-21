import { NavLink } from 'react-router-dom';
import { BsPatchQuestionFill, BsFillHouseDoorFill } from 'react-icons/bs';
import '../styles/navbar.scss';

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/"><BsFillHouseDoorFill /></NavLink></li>
      <li><NavLink to="/">Market Cap</NavLink></li>
      <li><NavLink to="/"><BsPatchQuestionFill /></NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
