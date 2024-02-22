import Hero from "./componentes/cuerpo/hero";
import Wraper from "./componentes/wraper";
import SeccionServ from "./componentes/cuerpo/seccionServ";
import Presentacion from "./componentes/cuerpo/presentacion";
import CardServicios from "./componentes/cuerpo/cardServicios";
import Penultima from "./componentes/cuerpo/penultima";
import HeroVideo from "./componentes/cuerpo/heroVideo";
import BtnScroll from "./componentes/cuerpo/botones/btnScroll";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Presentacion />
      <BtnScroll />
      <div className="posicion">
        <SeccionServ />
      </div>
      <CardServicios />
      <Penultima />
    </>
  );
}
