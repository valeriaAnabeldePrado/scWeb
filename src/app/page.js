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
import RecargaWraper from "./componentes/cuerpo/recargaWraper";
import NavBar from "./componentes/cuerpo/navBar";

export default function Home() {
  return (
    <>
      <MiLoader>
        <svg className="pointer-events-none absolute cursor-none z-10">
          <filter id="grainy">
            <feTurbulence
              type="turbulence"
              baseFrequency=".5"
              numOctaves="3"
              result="warp"
            ></feTurbulence>
          </filter>
        </svg>
        <Wraper>
          <Inicio>
            <RecargaWraper />
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
