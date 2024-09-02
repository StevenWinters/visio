interface Props {
  children: string;
  className?: string;
}

const Badge = ({ children, className }: Props) => {
  return (
    <span className={`flex align--center gap badge ${className}`}>
      <span className="badge--circle"></span>
      {children}
    </span>
  );
};

export default Badge;
