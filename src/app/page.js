import Hero from "./componentes/cuerpo/hero";
import Wraper from "./componentes/wraper";
import HeroVideo from "./componentes/cuerpo/heroVideo";
import Presentacion from "./componentes/cuerpo/presentacion";
import BtnScroll from "./componentes/cuerpo/botones/btnScroll";
import SeccionServ from "./componentes/cuerpo/seccionServ";
import FooterInfinito from "./componentes/cuerpo/footer";
import Penultima from "./componentes/cuerpo/penultima";
import ServiciosResp from "./componentes/cuerpo/serviciosResp";

export default function Home() {
  return (
    <>
      <Wraper>
        <Hero />
        <Presentacion />
        <BtnScroll />
        <SeccionServ />
        <ServiciosResp />
        <FooterInfinito />
        <Penultima />
      </Wraper>
    </>
  );
}
