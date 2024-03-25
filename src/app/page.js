// import Hero from "./componentes/cuerpo/hero";
import Wraper from "./componentes/wraper";
import SeccionServ from "./componentes/cuerpo/seccionServ";
import Presentacion from "./componentes/cuerpo/presentacion";
import CardServicios from "./componentes/cuerpo/cardServicios";
import Penultima from "./componentes/cuerpo/penultima";
import HeroVideo from "./componentes/cuerpo/heroVideo";
import BtnScroll from "./componentes/cuerpo/botones/btnScroll";
import FooterInfinito from "./componentes/cuerpo/footer";

export default function Home() {
  return (
    <>
      <Wraper>
        <HeroVideo />
        <Presentacion />
        <BtnScroll />
        <SeccionServ />
        <CardServicios />
        <FooterInfinito />
        {/* <section style={{ height: "100vh", backgroundColor: "blue" }}></section>
        <section style={{ height: "100vh", backgroundColor: "red" }}></section> */}
        <Penultima />
        {/* <FooterInfinito /> */}
      </Wraper>
    </>
  );
}
