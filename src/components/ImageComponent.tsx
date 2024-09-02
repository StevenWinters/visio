interface Props {
  src: string;
  alt?: string;
  className?: string;
}

const ImageComponent = ({ src, alt, className }: Props) => {
  return (
    <div className={`border ${className}`}>
      <img className="img" src={src} alt={alt} />
    </div>
  );
};

export default ImageComponent;
