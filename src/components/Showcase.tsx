import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface Props {
  heading?: string;
  description?: string;
  className?: string;
  icon?: boolean;
  src: string;
}

const Showcase = ({ heading, description, className, src, icon }: Props) => {
  return (
    <Link to="/work" className={className}>
      <div className="border">
        <div className="showcase">
          <div className="glow glow__showcase"></div>
          {icon && <GoArrowRight size={40} className="icon-arrow" />}
          <h3>{heading}</h3>
          <p className="showcase__text">{description}</p>
          <img className="img showcase__img" src={src} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Showcase;
