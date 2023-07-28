import React from "react";
import Main from "../layouts/Main";
import { Routes, Route } from "react-router-dom";
import { Beranda, LandingPage, Lomba, Riwayat } from "../pages";

const Routing = ({ pages, ...props }) => {
  return (
    <div>
      <Routes>
        <Route path={pages.index} exact element={<LandingPage />} />
        <Route path={pages.beranda} element={<Beranda />} />
        <Route path={pages.lomba} element={<Lomba />} />
        <Route path={pages.riwayat} element={<Riwayat />} />
      </Routes>
    </div>
  );
};

export default Routing;
