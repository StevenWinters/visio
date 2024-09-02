import { Link } from "react-router-dom";

interface Props {
  className?: string;
  children: string;
  path: string;
}

const Button = ({ className, children, path }: Props) => {
  return (
    <Link to={path}>
      <button className={`btn ${className}`}>{children}</button>
    </Link>
  );
};

export default Button;
