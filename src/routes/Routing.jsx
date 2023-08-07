import { Routes, Route } from "react-router-dom";
import { Beranda, LandingPage, Lomba, Jadwal, Riwayat, Login, Register, DetailLomba } from "../pages";
import { categories } from "../constants";

const Routing = ({ pages, ...props }) => {
  return (
    <Routes>
      <Route path={pages.index} exact element={<LandingPage />} />
      <Route path={pages.beranda} element={<Beranda />} />
      <Route path={pages.lomba} element={<Lomba />} />
      <Route path={`${pages.lomba}/:kategori`} element={<DetailLomba />} />
      <Route path={pages.jadwal} element={<Jadwal />} />
      <Route path={pages.riwayat} element={<Riwayat />} />
      <Route path={pages.login} element={<Login />} />
      <Route path={pages.register} element={<Register />} />
    </Routes>
  );
};

export default Routing;
