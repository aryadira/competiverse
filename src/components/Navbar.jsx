import BoxContainer from "../layouts/BoxContainer";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import headerStyle from "../style.js";

const Navbar = ({ pages, ...props }) => {
  return (
    <header className={`${headerStyle.base} ${headerStyle.layout.between} top-0`}>
      <BoxContainer className='w-full mx-auto'>
        <nav className={headerStyle.layout.between}>
          <Logo />
          <ul className={`${headerStyle.ul.layout}`}>
            <li>
              <Link to={pages.beranda} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to={pages.lomba} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Lomba
              </Link>
            </li>
            <li>
              <Link to={pages.riwayat} className={`${headerStyle.link.base} ${headerStyle.link.hoverText}`}>
                Riwayat
              </Link>
            </li>
          </ul>
          <ul className={`${headerStyle.ul.bground} ${headerStyle.ul.layout}`}>
            <li>
              <Link to={pages.login} className={headerStyle.link.base}>
                Login
              </Link>
            </li>
            <li>
              <Link to={pages.register} className={`${headerStyle.link.base} ${headerStyle.link.focus} ${headerStyle.link.hoverBg}`}>
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
