import ContentHeader from "./ContentHeader";

interface Props {
  callout: string;
  images: {
    id: number;
    src: string;
  }[];
  className: string;
}

const WorkColumn = ({ callout, images, className }: Props) => {
  return (
    <div
      className={`flex flex--column work__content work__display ${className}`}
    >
      <ContentHeader>{callout}</ContentHeader>
      <div className="content__images">
        {images.map((image) => (
          <img key={image.id} className="img" src={image.src} alt="" />
        ))}
      </div>
    </div>
  );
};

export default WorkColumn;
