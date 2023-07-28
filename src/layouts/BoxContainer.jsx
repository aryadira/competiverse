const BoxContainer = ({ children, className, ...props }) => {
  return <div className={`container w-auto mx-[40px] md:mx-[120px] ${className}`}>{children}</div>;
};

export default BoxContainer;
