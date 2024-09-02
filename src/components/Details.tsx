import Info from "../assets/stevenson/info.png";
import Header from "./Header";

const Details = () => {
  return (
    <section className="block container details">
      <Header badge="My Info">Get To Know Me</Header>
      <div className="grid grid--1x2 info">
        <div className="flex flex--column align--center info__white">
          <div className="info__image">
            <img className="img img--circle" src={Info} alt="Breeze" />
          </div>
          <div className="flex flex--column info__sections">
            <span className="text--medium text--dark info__section">
              Experience
            </span>
            <span className="text--medium text--dark info__section">
              Interests
            </span>
            <span className="text--medium text--dark info__section">
              Hobbies
            </span>
            <span className="text--medium text--dark info__section">
              Education
            </span>
            <span className="text--medium text--dark info__section">Tools</span>
          </div>
        </div>
        <div className="info__dark">
          <div className="flex flex--column info__content">
            <span className="text--heading">Mathew Stevenson C. Chin</span>
            <span className="text--medium text--grey">Steve/Stevenson</span>
          </div>
          <div className="flex flex--column info__content">
            <span className="text--heading text--light">
              Born November 29, 2007
            </span>
            <span className="text--medium text--grey">16 Years Old</span>
          </div>
          <div className="flex flex--column info__content">
            <span className="text--heading text--pink">2+ Years of</span>
            <span className="text--medium">
              Front-End Programming/Designing Experience
            </span>
          </div>
          <div className="flex flex--column info__content">
            <span className="text--heading text--light">Interested in:</span>
            <span className="text--medium text--grey">
              Programming, UI/Visual Designing, Cinematography
            </span>
          </div>
          <div className="flex flex--column info__content">
            <span className="text--heading text--light">Hobbies:</span>
            <span className="text--medium text--grey">
              Gaming, Watching Videos, Reading Books, Programming/Designing
            </span>
          </div>
          <div className="flex flex--column info__content">
            <span className="text--heading text--light">Education:</span>
            <span className="text--medium">
              Philippine Women's University JASMS Manila
            </span>
          </div>
          <div className="flex flex--column info__content">
            <span className="text--heading text--light">Tools:</span>
            <span className="text--medium text--grey">
              HTML/CSS, JavaScript, React, SQL, NodeJS, Adobe Photoshop, Adobe
              Premiere Pro, Figma
            </span>
          </div>
          <span className="text--heading text--light">
            Lives in Paco, Manila
          </span>
        </div>
      </div>
    </section>
  );
};

export default Details;
