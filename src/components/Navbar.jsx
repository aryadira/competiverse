import BoxContainer from "../layouts/BoxContainer";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import headerStyle from "../style.js";

const Navbar = ({ pages, ...props }) => {
  return (
    <header className={`${headerStyle.base} ${headerStyle.layout.between}`}>
      <BoxContainer className='w-full mx-auto'>
        <nav className={headerStyle.layout.between}>
          <Logo />
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
