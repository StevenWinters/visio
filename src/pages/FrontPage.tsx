import Button from "../components/Button";
import Logo from "../components/Logo";

const FrontPage = () => {
  return (
    <section className="block block--full front">
      <div className="glow glow__front"></div>
      <Logo className="logo__front" />
      <h1 className="heading__front">VISIO</h1>
      <Button className="btn--primary btn--lg btn__front" path="home">
        Enter
      </Button>
    </section>
  );
};

export default FrontPage;
