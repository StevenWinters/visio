import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { footerData } from "../data/FooterData";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return;
  return (
    <footer className="grid grid--1x2 gap--lg grid--center container">
      <div className="glow glow__footer"></div>
      <Logo className="logo__footer" />
      <div className="flex flex--column justify--around footer__container">
        <div className="grid grid--1x2 footer__grid">
          {footerData.map((data) => (
            <div key={data.id}>
              <h4>{data.section}</h4>
              <ul>
                {data.links.map((link) => (
                  <li key={link.id} className="footer__list">
                    <NavLink to={link.path} className="link footer__link">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="copyright__container">
          <p className="copyright">
            Copyright &copy; 2023. All Rights Reserved.
          </p>
          <p className="">Powered by Mathew Stevenson Chin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
