import StoryContent from "../components/StoryContent";
import Header from "../components/Header";

const StoryPage = () => {
  return (
    <>
      <div className="glow glow__story-accent"></div>
      <div className="glow glow__story"></div>
      <Header badge="My Story">
        Creativity? Innovation? Becoming a Visionary? <br />
        That's what I aspire to be.
      </Header>
      <StoryContent />
    </>
  );
};

export default StoryPage;
