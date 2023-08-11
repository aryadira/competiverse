import circleGradient from "../assets/icons/circle-gradient.png";

const Gradient = ({ className, ...props }) => {
  return (
    <div className={`${className} absolute rounded-full`}>
      <img src={circleGradient} alt='nama' />
    </div>
  );
};

export default Gradient;
