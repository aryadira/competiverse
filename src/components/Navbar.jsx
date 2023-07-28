import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ pages, ...props }) => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
