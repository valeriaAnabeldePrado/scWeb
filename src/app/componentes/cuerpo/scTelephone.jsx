"use client";
import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import "../styles.scss";
import { animacionCelu } from "./animaciones/animacion";
const ScTelephone = () => {
  const tituloContainer = useRef(null);
  const tituloResi = ["S", "C"];
  const tutuloResiB = ["S", "T", "U", "D", "I", "O"];

  useGSAP(
    () => {
      animacionCelu();
    },
    { ecope: tituloContainer }
  );
  return (
    <>
      <div className="cont-tituloRes" ref={tituloContainer}>
        <section className="section-letrasRes">
          {tituloResi.map((letra, index) => (
            <p key={index} className={`laLetra letraRes${letra}`}>
              {letra}
            </p>
          ))}
        </section>
        <section className="section-letrasRes">
          {tutuloResiB.map((letra, index) => (
            <p key={index} className={`laLetra letraRes${letra}`}>
              {letra}
            </p>
          ))}
        </section>
      </div>
    </>
  );
};

export default ScTelephone;
