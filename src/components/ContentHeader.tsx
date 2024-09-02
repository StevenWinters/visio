import Badge from "./Badge";

interface Props {
  className?: string;
  children: string;
}

const ContentHeader = ({ className, children }: Props) => {
  return (
    <div className={`content__header ${className}`}>
      <Badge className="justify--center work__badge">Featuring</Badge>
      <span className="work__callout">{children}</span>
    </div>
  );
};

export default ContentHeader;
