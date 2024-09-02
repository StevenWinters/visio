import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavLists from "./NavLists";
import Toggle from "./Toggle";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const NavBar = () => {
  const { pathname } = useLocation();
  const [isMenuActive, setMenuActive] = useState(false);

  if (pathname === "/") return;

  return (
    <header className="overlay">
      <nav className="flex justify--between align--center nav__bar">
        <div className="flex align--center gap--sm nav__div">
          <Logo />
          <Link to="/" className="heading__logo">
            VISIO
          </Link>
        </div>
        <Toggle />
        <NavLists
          isMenuActive={isMenuActive}
          setMenuActive={() => setMenuActive(!isMenuActive)}
        />
        <HamburgerMenu
          isMenuActive={isMenuActive}
          setMenuActive={() => setMenuActive(!isMenuActive)}
        />
      </nav>
    </header>
  );
};

export default NavBar;
