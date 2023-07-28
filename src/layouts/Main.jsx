import { Beranda, LandingPage, Lomba } from "../pages";
import { Navbar, Footer } from "../components/";
import { Link } from "react-router-dom";
import BoxContainer from "./BoxContainer";
import Routing from "../routes/Routing";

const Main = () => {
  const pages = {
    beranda: "/beranda",
    jadwal: "jadwal",
    lomba: "/lomba",
    riwayat: "/riwayat",
    login: "/login",
    register: "/register",
  };

  return (
    <main className='h-[200vh] bg-baseColor '>
      <Navbar pages={pages} />
      <BoxContainer className='pt-[70px]'>
        <Routing pages={pages} />
      </BoxContainer>
      <Footer />
    </main>
  );
};

export default Main;
