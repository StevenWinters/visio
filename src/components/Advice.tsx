import Badge from "./Badge";

const Advice = () => {
  return (
    <section className="block advice">
      <div className="container">
        <Badge>My Advice</Badge>
        <div className="advice__container">
          <div className="glow glow__advice"></div>
          <div className="glow glow__advice"></div>
          <h2>"The best time is to start now. Don't ask for tomorrow."</h2>
        </div>
      </div>
    </section>
  );
};

export default Advice;
