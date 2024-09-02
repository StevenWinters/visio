import About from "../components/About";
import Advice from "../components/Advice";
import Hero from "../components/Hero";
import MediaShowcase from "../components/MediaShowcase";
import WorkShowcase from "../components/WorkShowcase";

const HomePage = () => {
  return (
    <>
      <div className="glow glow__home"></div>
      <Hero />
      <About />
      <WorkShowcase />
      <MediaShowcase />
      <Advice />
    </>
  );
};

export default HomePage;
