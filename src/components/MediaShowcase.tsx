import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const MediaShowcase = () => {
  return (
    <section className="block media__showcase">
      <div className="grid grid--1x2 container platforms__container">
        <div className="flex flex--column gap--lg platforms">
          <span className="media__heading">Google</span>
          <span className="media__heading">Discord</span>
          <span className="media__heading">Canva</span>
          <span className="media__heading">ChatGPT</span>
        </div>
        <div>
          <h2>Platforms I engage with.</h2>
          <NavLink to="/logs" className="flex align--center gap--sm link--grey">
            View More <GoArrowRight size={30} className="icon-link" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
