"use client";
import React from "react";
import Esfera from "../escenaComp/esfera";
import "../styles.scss";

const SeccionServ = () => {
  return (
    <>
      <section style={{ position: "relative" }} className="seccionEsfera">
        <Esfera />
        <h1 className="titlee">
          Conoce nuestras propuestas e impulsa tu negocio!
        </h1>
      </section>
    </>
  );
};

export default SeccionServ;
