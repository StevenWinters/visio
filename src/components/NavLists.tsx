import { NavLink } from "react-router-dom";
import { navListsData } from "../data/NavListsData";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  isMenuActive: boolean;
  setMenuActive: () => void;
}

const NavLists = ({ isMenuActive, setMenuActive }: Props) => {
  return (
    <ul className={`flex nav__lists ${isMenuActive ? "active" : ""}`}>
      {navListsData.map((data) => (
        <li className="nav__list" key={data.id}>
          <NavLink
            className="flex gap align--center link nav__link"
            to={data.path}
            onClick={setMenuActive}
          >
            {data.name}
            <span className="nav__icon">
              <FiExternalLink />
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLists;
