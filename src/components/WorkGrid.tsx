import ContentHeader from "./ContentHeader";

interface Props {
  callout: string;
  images: {
    id: number;
    src: string;
  }[];
  gridClass: string;
  workClass: string;
}

const WorkGrid = ({ callout, images, gridClass, workClass }: Props) => {
  return (
    <div className={`work__display work__border ${workClass}`}>
      <ContentHeader>{callout}</ContentHeader>
      <div className={`grid gap--lg grid__images ${gridClass}`}>
        {images.map((image) => (
          <img
            key={image.id}
            className="img content__img"
            src={image.src}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default WorkGrid;
