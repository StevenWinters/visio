import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  children: string;
}

const LargeBadge = ({ children, icon }: Props) => {
  return (
    <span className="flex align--center gap badge badge--lg">
      {icon}
      {children}
    </span>
  );
};

export default LargeBadge;
