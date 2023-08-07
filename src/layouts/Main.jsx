import { Beranda, LandingPage, Lomba, Register, Login } from "../pages";
import { Navbar, Footer, Card } from "../components/";
import { Link } from "react-router-dom";
import BoxContainer from "./BoxContainer";
import Routing from "../routes/Routing";

const Main = () => {
  const pages = {
    index: "/",
    beranda: "/beranda",
    jadwal: "/jadwal",
    lomba: "/lomba",
    riwayat: "/riwayat",
    login: "/login",
    register: "/register",
  };

  return (
    <main className='bg-baseColor relative h-max'>
      <Navbar pages={pages} />
      <BoxContainer className='pt-[70px]'>
        <Routing pages={pages} />
      </BoxContainer>
      <Footer />
    </main>
  );
};

export default Main;
