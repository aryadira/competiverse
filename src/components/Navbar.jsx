import BoxContainer from "../layouts/BoxContainer";
import { variant } from "../utils/utils";
import { Link } from "react-router-dom";

const Navbar = ({ pages, ...props }) => {
  const navStyle = variant("rounded shadow-xl hover:shadow-none font-semibold transition", {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 shadow-blue-300 text-white",
      danger: "bg-red-500 hover:bg-red-600 shadow-red-300 text-white",
    },
    size: {
      small: "py-1 px-3",
      medium: "py-2 px-4",
    },
  });

  return (
    <header className='w-full backdrop-blur-sm bg-white/40 py-3 px-0 fixed'>
      <BoxContainer className=''>
        <nav>
          <div className='logo'>Logo</div>
          <ul>
            <li>
              <Link to={pages.index}>Index</Link>
            </li>
            <li>
              <Link to={pages.beranda}>Beranda</Link>
            </li>
            <li>
              <Link to={pages.lomba}>Lomba</Link>
            </li>
            <li>
              <Link to={pages.riwayat}>Riwayat</Link>
            </li>
          </ul>
          <div className='navUser'>
            <li>
              <Link to={pages.login}>login</Link>
            </li>
            <li>
              <Link to={pages.register}>register</Link>
            </li>
          </div>
        </nav>
      </BoxContainer>
    </header>
  );
};

export default Navbar;
