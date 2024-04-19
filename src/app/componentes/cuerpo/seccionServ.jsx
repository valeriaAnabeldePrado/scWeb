"use client";
import React from "react";
import Esfera from "../escenaComp/esfera";
import { useSelector } from "react-redux";
import ResizeW from "ana/app/redux/useResize";
import "../styles.scss";

const SeccionServ = () => {
  const width = useSelector((state) => state.valorTamanio.tamanio);
  return (
    <ResizeW>
      <div className="posicion">
        <section style={{ position: "relative" }} className="seccionEsfera">
          <Esfera />

          {width <= 600 ? (
            <h2 className="titlee">
              Donde la innovación, el diseño y la tecnología se encuentran para
              crear experiencias digitales exclusivas, únicas en un mundo lleno
              de plantillas.
            </h2>
          ) : (
            <h2 className="titlee">
              Conoce nuestras propuestas e impulsa tu negocio!
            </h2>
          )}
        </section>
      </div>
    </ResizeW>
  );
};

export default SeccionServ;
