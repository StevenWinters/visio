import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Toggle = () => {
  const [isActive, setActive] = useState("work");
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/work" && pathname !== "/story") {
      setActive("");
    }

    if (pathname === "/story") setActive("story");
    if (pathname === "/work") setActive("work");
  });

  return (
    <div className="toggle">
      <ul className="flex align--center toggle__lists">
        <li className="toggle__list">
          <Link
            to="work"
            className={`link toggle__link ${
              isActive === "work" ? "active-left" : ""
            }`}
          >
            Work
          </Link>
        </li>
        <li className="toggle__list">
          <Link
            to="story"
            className={`link toggle__link ${
              isActive === "story" ? "active-right" : ""
            }`}
          >
            Story
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Toggle;
