import BoxContainer from "../layouts/BoxContainer";
import { variant } from "../utils/utils";
import { Link } from "react-router-dom";

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
    size: "text-xl",
  },
  ul: {
    layout: "flex items-center gap-3 capitalize",
    bground: "bg-[#6A5AE0] py-3 px-6 rounded-full text-white",
  },
  li: {
    hover: "py-2 px-3 bg-slate-100",
    focus: "py-2 px-3 bg-white",
  },
};

const Navbar = ({ pages, ...props }) => {
  return (
    <header className={`${headerStyle.base} ${headerStyle.layout.between}`}>
      <BoxContainer className='w-full'>
        <nav className={headerStyle.layout.between}>
          <div className={headerStyle.logo.size}>Logo</div>
          <ul className={`${headerStyle.ul.layout} ${headerStyle.ul.bground}`}>
            <li>
              <Link to={pages.beranda}>Beranda</Link>
            </li>
            <li>
              <Link to={pages.lomba}>Lomba</Link>
            </li>
            <li>
              <Link to={pages.jadwal}>Jadwal</Link>
            </li>
            <li>
              <Link to={pages.riwayat}>Riwayat</Link>
            </li>
          </ul>
          <ul className={`${headerStyle.ul.bground} ${headerStyle.ul.layout}`}>
            <li>
              <Link to={pages.login}>Login</Link>
            </li>
            <li>
              <Link to={pages.register}>Register</Link>
            </li>
          </ul>
        </nav>
      </BoxContainer>
    </header>
  );
};

export default Navbar;
