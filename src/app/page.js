import Hero from "./componentes/cuerpo/hero";
import Wraper from "./componentes/wraper";

import Presentacion from "./componentes/cuerpo/presentacion";
import BtnScroll from "./componentes/cuerpo/botones/btnScroll";
import SeccionServ from "./componentes/cuerpo/seccionServ";
import FooterInfinito from "./componentes/cuerpo/footer";
import Penultima from "./componentes/cuerpo/penultima";
import ServiciosResp from "./componentes/cuerpo/serviciosResp";
import MiLoader from "./componentes/cuerpo/loader";
import Inicio from "./componentes/cuerpo/inicio";

export default function Home() {
  return (
    <>
      <MiLoader>
        <Wraper>
          <Inicio>
            <Hero />
            <Presentacion />
            <BtnScroll />
            <SeccionServ />
            <ServiciosResp />
            <FooterInfinito />
            <Penultima />
          </Inicio>
        </Wraper>
      </MiLoader>
    </>
  );
}
