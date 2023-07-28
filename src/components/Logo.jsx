import logo from "../assets/icons/logocompetiverse.png";
import headerStyle from "../style.js";

const Logo = () => {
  return (
    <a href='/' className={headerStyle.layout.between}>
      <img src={logo} alt='logo' className='w-[45px]' />
      <h2 className={`${headerStyle.logo.style}`}>Competiverse</h2>
    </a>
  );
};

export default Logo;
