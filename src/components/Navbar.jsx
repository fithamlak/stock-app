import { NavLink, useParams } from 'react-router-dom';
import { BsPatchQuestionFill, BsFillHouseDoorFill, BsChevronLeft } from 'react-icons/bs';
import '../styles/navbar.scss';

const Navbar = () => (
  <nav>
    {
      Object.keys(useParams()).length === 0
        ? (
          <ul>
            <li><NavLink to="/"><BsFillHouseDoorFill /></NavLink></li>
            <li><NavLink to="/">Market Cap</NavLink></li>
            <li><NavLink to="/"><BsPatchQuestionFill /></NavLink></li>
          </ul>
        )
        : (
          <ul>
            <li><NavLink to="/"><BsChevronLeft /></NavLink></li>
            <li><NavLink to="/">Campany</NavLink></li>
            <li><NavLink to="/"><BsPatchQuestionFill /></NavLink></li>
          </ul>
        )
    }
  </nav>
);

export default Navbar;
