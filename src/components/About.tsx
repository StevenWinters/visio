import Badge from "./Badge";
import Button from "./Button";
import ImageComponent from "./ImageComponent";
import AboutMe from "../assets/stevenson/about-me.png";

const About = () => {
  return (
    <section className="block container grid grid--1x2 grid--center align--center gap--lg about">
      <ImageComponent src={AboutMe} />
      <div className="about__container">
        <Badge>About Me</Badge>
        <h2>I forge websites, videos & 2D/3D designs.</h2>
        <p>
          I'm a believer that anyone can do anything they truly envision in
          life.
        </p>
        <Button className="btn--secondary" path="/story">
          View Story
        </Button>
      </div>
    </section>
  );
};

export default About;
