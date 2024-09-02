import { Link } from "react-router-dom";
import VisioLogo from "../assets/images/visio.png";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link to="/">
      <img
        className={`img ${className ? className : "logo"}`}
        src={VisioLogo}
        alt="Visio Logo"
      />
    </Link>
  );
};

export default Logo;
