import ContentHeader from "./ContentHeader";

interface Props {
  images: {
    id: number;
    src: string;
  }[];
  callout: string;
  className?: string;
}

const WorkDisplay = ({ images, callout, className }: Props) => {
  return (
    <section className={`container display__work ${className}`}>
      <div className="border">
        <ContentHeader className="display__header">{callout}</ContentHeader>
        <div className="container grid gap align--center display__container">
          {images.map((image) => (
            <img
              key={image.id}
              className="img display__img"
              src={image.src}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkDisplay;
