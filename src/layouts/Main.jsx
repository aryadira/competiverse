import { Navbar, Footer, Card } from "../components/";
import BoxContainer from "./BoxContainer";
import Routing from "../routes/Routing";

const Main = () => {
  const pages = {
    index: "/",
    beranda: "/beranda",
    lomba: `/lomba`,
    jadwal: "/jadwal",
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
