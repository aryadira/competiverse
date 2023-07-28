import BoxContainer from "../layouts/BoxContainer";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logocompetiverse.png";

const headerStyle = {
  base: "w-full backdrop-blur-sm bg-white/40 py-3 px-0 fixed",
  bground: "",
  layout: {
    between: "flex justify-between items-center",
    center: "flex justify-center items-center",
    around: "flex justify-around items-center",
    evenly: "flex justify-evenly items-center",
  },
  logo: {
    style: "ml-2 text-xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-semibold text-transparent",
  },
  ul: {
    layout: "flex items-center gap-2 capitalize",
    bground: "bg-[#6A5AE0] px-2 py-4 rounded-full text-white",
  },
  li: {
    base: "py-2 px-4",
    hover: "hover:bg-slate-100",
    focus: "py-2 px-4 bg-white text-[#6A5AE0] rounded-full",
  },
};

const Navbar = ({ pages, ...props }) => {
  return (
    <header className={`${headerStyle.base} ${headerStyle.layout.between}`}>
      <BoxContainer className='w-full mx-auto'>
        <nav className={headerStyle.layout.between}>
          <div className={headerStyle.layout.between}>
            <img src={logo} alt='logo' className='w-[45px]' />
            <h2 className={`${headerStyle.logo.style}`}>Competiverse</h2>
          </div>
          <ul className={`${headerStyle.ul.layout} ${headerStyle.ul.bground}`}>
            <li>
              <Link to={pages.beranda} className={headerStyle.li.base}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to={pages.lomba} className={headerStyle.li.base}>
                Lomba
              </Link>
            </li>
            <li>
              <Link to={pages.riwayat} className={headerStyle.li.base}>
                Riwayat
              </Link>
            </li>
          </ul>
          <ul className={`${headerStyle.ul.bground} ${headerStyle.ul.layout}`}>
            <li>
              <Link to={pages.login} className={headerStyle.li.base}>
                Login
              </Link>
            </li>
            <li>
              <Link to={pages.register} className={`${headerStyle.li.base} ${headerStyle.li.focus} ${headerStyle.li.hover}`}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </BoxContainer>
    </header>
  );
};

export default Navbar;
