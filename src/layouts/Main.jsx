import React from "react";
import { Beranda, LandingPage, Lomba } from "../pages";
import { Navbar } from "../components/";
import { Link } from "react-router-dom";
import Container from "./Container";
import Routing from "../routes/Routing";

const Main = () => {
  const pages = {
    index: "/",
    beranda: "/beranda",
    jadwal: "jadwal",
    lomba: "/lomba",
    riwayat: "/riwayat",
    login: "/login",
    register: "/register",
  };

  return (
    <main>
      <Navbar pages={pages} />
      <Container className='bg-red-500'>
        <Routing pages={pages} />
      </Container>
    </main>
  );
};

export default Main;
