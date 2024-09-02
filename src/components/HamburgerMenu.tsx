interface Props {
  isMenuActive: boolean;
  setMenuActive: () => void;
}

const HamburgerMenu = ({ isMenuActive, setMenuActive }: Props) => {
  return (
    <div
      className={`flex justify--center align--center flex--column gap--sm hamburger__menu ${
        isMenuActive ? "active" : ""
      }`}
      onClick={setMenuActive}
    >
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
};

export default HamburgerMenu;
