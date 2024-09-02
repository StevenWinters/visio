import ImageComponent from "./ImageComponent";
import Beach from "../assets/stevenson/beach.jpg";

const StoryContent = () => {
  return (
    <>
      <section className="block story__content">
        <div className="container">
          <div className="grid grid--1x2 story__grid story__desktop">
            <div className="story__container">
              <article>
                <ImageComponent src={Beach} />
                <div className="content__description">
                  <h3>My Past</h3>
                  <p>
                    When I was 5, I loved playing video games that involved
                    building, like horror maps/ships/cities. I also liked the
                    idea of adding functionality to these designs. <br />
                    <br />
                    It was until then that I was fascinated by creativity,
                    ranging my skills from designing in video games to making
                    something different and real.
                  </p>
                </div>
              </article>
              <article>
                <ImageComponent src={Beach} />
                <div className="content__description">
                  <h3>The Problem…</h3>
                  <p>
                    Based on my experience in school, I saw that education was
                    not progressing fast enough. In other words, I thought it
                    was not the best place for learning. <br /> <br />
                    Instead, I felt that self-learning through books or online
                    videos/sites/courses were the fastest and most interesting
                    ways to learn, since you can pace yourselves as you go
                    through them.
                  </p>
                </div>
              </article>
            </div>
            <div className="story__container">
              <article>
                <h2 className="content__heading">
                  Welcome to my world. I hope you find it interesting.
                </h2>
                <ImageComponent src={Beach} />
              </article>
              <article>
                <div className="content__description content__margin">
                  <h3>The Real Stuff...</h3>
                  <p>
                    Now that I had some background in designing, I decided to
                    take up programming. Programming, from what I know of, was a
                    place that matched my imagination for creation & innovation.
                    <br /> <br />
                    It had designs but also functionalities, which made it
                    cooler.
                  </p>
                </div>
                <ImageComponent src={Beach} />
              </article>
            </div>
          </div>
          <div className="story__mobile">
            <article>
              <ImageComponent src={Beach} />
              <h2 className="content__heading">
                Welcome to my world. I hope you find it interesting.
              </h2>
            </article>
            <article>
              <ImageComponent src={Beach} />
              <div className="content__description">
                <h3>My Past</h3>
                <p>
                  When I was 5, I loved playing video games that involved
                  building, like horror maps/ships/cities. I also liked the idea
                  of adding functionality to these designs.
                  <br />
                  <br />
                  It was until then that I was fascinated by creativity, ranging
                  my skills from designing in video games to making something
                  different and real.
                </p>
              </div>
            </article>
            <article>
              <ImageComponent src={Beach} />
              <div className="content__description content__margin">
                <h3>The Real Stuff...</h3>
                <p>
                  Now that I had some background in designing, I decided to take
                  up programming. Programming, from what I know of, was a place
                  that matched my imagination for creation & innovation.
                  <br /> <br />
                  It had designs but also functionalities, which made it cooler.
                </p>
              </div>
            </article>
            <article>
              <ImageComponent src={Beach} />
              <div className="content__description">
                <h3>The Problem…</h3>
                <p>
                  Based on my experience in school, I saw that education was not
                  progressing fast enough. In other words, I thought it was not
                  the best place for learning. <br /> <br />
                  Instead, I felt that self-learning through books or online
                  videos/sites/courses were the fastest and most interesting
                  ways to learn, since you can pace yourselves as you go through
                  them.
                </p>
              </div>
            </article>
          </div>
          <article className="grid grid--1x2 grid--center align--center gap--lg story__box">
            <ImageComponent src={Beach} />
            <div className="box__description">
              <h3>Value</h3>
              <p>
                So, I decided to digest as much information as possible in the
                field of ICT or anything computer-related to solve these types
                of problems. <br /> <br />
                With this, I could create valuable content that can be shared
                throughout the world, hoping to reach and save people's time and
                lives.
              </p>
            </div>
          </article>
          <article className="flex flex--column justify--center align--center story__center">
            <h3>Uncertainty</h3>
            <p>
              Though I am certain that I would be taking up programming, I am
              still uncertain if my main issue would be to solve problems for
              education. However, the time will pass by, and soon I'll find my
              true purpose in life.
            </p>
            <div className="glow glow__uncertainty"></div>
          </article>
        </div>
      </section>
    </>
  );
};

export default StoryContent;
