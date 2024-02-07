import Hero from "./componentes/cuerpo/hero";
import Wraper from "./componentes/wraper";
import SeccionServ from "./componentes/cuerpo/seccionServ";
import Presentacion from "./componentes/cuerpo/presentacion";
import CardServicios from "./componentes/cuerpo/cardServicios";

export default function Home() {
  return (
    <>
      <Wraper>
        <Hero />
        <Presentacion />
        <div className="posicion">
          <SeccionServ />
        </div>
        <CardServicios />
      </Wraper>
    </>
  );
}
