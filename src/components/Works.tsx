import { Link } from "react-router-dom";

interface Props {
  heading: string;
  worksData: {
    id: number;
    title: string;
    description: string;
    link?: string;
  }[];
  className?: string;
}

const Works = ({ heading, worksData, className }: Props) => {
  return (
    <section className={`block__works container grid grid--1x2 ${className}`}>
      <h2 className="works__heading">{heading}</h2>
      <div>
        {worksData.map((data) => (
          <div key={data.id} className="work__project">
            <h3>{data.title}</h3>
            <p className="project__description">{data.description}</p>
            {data.link ? (
              <Link
                className="link project__link"
                to={data.link}
                target="_blank"
              >
                {data.link}
              </Link>
            ) : (
              <p className="link project__link">In Progress</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
