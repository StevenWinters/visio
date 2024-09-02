import Header from "./Header";
import ImageComponent from "./ImageComponent";
import MediaBiography from "../assets/images/biography.png";
import QA from "./QA";

const Biography = () => {
  return (
    <section className="block container biography">
      <Header className="biography__header" badge="Media Biography">
        What I've Used in the Past.
      </Header>
      <ImageComponent className="" src={MediaBiography} />
      <div className="flex flex--column gap QA">
        <h2 className="QA__heading">Q&A:</h2>
        <QA question="What is your favorite medium nowadays?">
          My favorite medium now is YouTube since it is a kind of app that can
          provide both entertainment and educational content. However, it is the
          education content that I liked more specifically as the one part of
          YouTube since it provides explanations that are valuable and concise
        </QA>
        <QA question="What has changed in your media usage as you grew older and why?">
          My responsibilities and interests have changed my usage in the media.
          This is because as people grow older, more responsibilities are needed
          to be taken in order to progress through the world. More
          responsibilities can also drive people to do different tasks which
          brings out different interests. So, as a growing individual, I get to
          use media that is more suited to my needs, interests, and future, and
          that I try my best to get less exposed to media that is less important
          to me
        </QA>
        <QA
          question="What are the functions the media fulfill for the individual and for
          society?"
        >
          Media functions well in many things for individuals and society, such
          as the ability to provide new information and entertainment, promote
          businesses, and the ability to socialize with others.
        </QA>
        <QA question="How did the media impact us as individuals?">
          Media can impact us in positive or negative ways depending on how it
          is being used or consumed. Users who consume media in ways to gain
          factual information, awareness, and promote one's mental health will
          benefit from it. However, users who excessively consume media that
          does not promote value to one's self but rather demotivates or lowers
          their self-esteem can lead to bad mental health and potentially cause
          negative interactions within the media.
        </QA>
      </div>
    </section>
  );
};

export default Biography;
