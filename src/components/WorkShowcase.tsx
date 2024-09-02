import { workShowcaseData } from "../data/WorkShowcaseData";
import Showcase from "./Showcase";

const WorkShowcase = () => {
  return (
    <div className="work__showcase">
      <div className="container">
        {workShowcaseData.map((data) => (
          <Showcase
            heading={data.heading}
            description={data.description}
            src={data.src}
            icon={true}
            className="work__container"
          />
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
