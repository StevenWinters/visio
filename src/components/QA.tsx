import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  question: string;
  children: string;
}

const QA = ({ children, question }: Props) => {
  const [isActive, setActive] = useState(false);
  return (
    <div
      className="flex flex--column QA__container"
      onClick={() => setActive(!isActive)}
    >
      <div className="flex justify--between align--center gap">
        <p>{question}</p>
        <IoMdArrowDropdown
          size={40}
          color="var(--color-dark-border)"
          className={`icon-dropdown ${isActive && "active"}`}
        />
      </div>
      <div className={`QA__answer ${isActive && "active"}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default QA;
