const Hero = () => {
  return (
    <>
      <section className="block__home container">
        <div className="home__border">
          <div className="flex justify--center align--center flex--column home__container">
            <div className="glow glow__home-container"></div>
            <div className="flex align--center home__top">
              <div className="flex home__circles">
                <span className="home__circle"></span>
                <span className="home__circle"></span>
                <span className="home__circle"></span>
              </div>
            </div>
            <div className="flex flex--column align--center home__inner">
              <h1 className="home__heading">
                <span className="highlight--secondary">Vision</span> for the{" "}
                <span className="highlight--accent1">BEST.</span> <br />
                <span className="highlight--secondary">Vision</span> for{" "}
                <span className="highlight--accent2">SUCCESS.</span>
              </h1>
              <div className="flex flex--column gap--sm home__sub-header">
                <span>A Portfolio Designed By</span>
                <span className="text--grey">Mathew Stevenson Chin</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
