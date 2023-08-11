import logo from "../assets/icons/logocompetiverse.png";
import { headerStyle } from "../style";

const Logo = ({ className }) => {
  return (
    <a href='/' className='flex items-center'>
      <img src={logo} alt='logo' className='w-[45px]' />
      <h2 className={`${headerStyle.logo.style} ${className}`}>Competiverse</h2>
    </a>
  );
};

export default Logo;
