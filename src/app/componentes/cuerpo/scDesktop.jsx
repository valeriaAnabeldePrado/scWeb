"use client";
import React from "react";
import { useEffect } from "react";
import "../styles.scss";

import {
  animateTituloA,
  animateTituloB,
  paralax,
} from "./animaciones/animacion";
const ScDesktop = () => {
  const tituloA = ["S", "C", "", "S", "T"];
  const tituloB = ["U", "D", "I", "O"];

  useEffect(() => {
    animateTituloA();
    animateTituloB();

    paralax();
  }, []);
  return (
    <>
      <div className="tituloHero">
        <div className="letrasCont">
          <section className="letras">
            {tituloA.map((letra, index) => (
              <p
                key={index}
                className={`${letra} ${
                  letra === "S" ? `posicion${index}` : ""
                }`}
              >
                {letra}
              </p>
            ))}
          </section>
          <section className="letras">
            {tituloB.map((letra, index) => (
              <p key={index} className={`${letra}`}>
                {letra}
              </p>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default ScDesktop;
