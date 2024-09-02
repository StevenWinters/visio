import { FaRegLightbulb } from "react-icons/fa";
import LargeBadge from "./LargeBadge";
import { ReactNode } from "react";

interface Props {
  badge: string;
  children: ReactNode;
  className?: string;
}

const Header = ({ badge, children, className }: Props) => {
  return (
    <header
      className={`block container flex justify--center flex--column header ${className}`}
    >
      <LargeBadge icon={<FaRegLightbulb />}>{badge}</LargeBadge>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
