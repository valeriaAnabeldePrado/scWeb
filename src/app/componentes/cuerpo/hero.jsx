"use client";
import React, { useEffect, useRef } from "react";
import {
  animateTituloA,
  animateTituloB,
  animateTextoHero,
  paralax,
  paralaxEsferas,
} from "./animaciones/animacion";

import "../styles.scss";

const Hero = () => {
  const heroRef = useRef(null);
  const tituloA = ["S", "C", "", "S", "T"];
  const tituloB = ["U", "D", "I", "O"];

  useEffect(() => {
    animateTituloA();
    animateTituloB();
    animateTextoHero();
    paralax();
    paralaxEsferas();
  }, []);

  return (
    <>
      <div className="hero-cuerpo" ref={heroRef}>
        <img src="./esferaOsc.png" alt="esfera" className="esfera esfera1" />
        <img src="./blopesfera.png" alt="esfera" className="esfera esfera2" />
        <h4 className="textoHero">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          provident fugit sequi! Tenetur aut nostrum nihil labore voluptatibus,
          vel eaque, animi, iure ab ut nesciunt assumenda id omnis praesentium
          nulla.
        </h4>
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
      </div>
    </>
  );
};

export default Hero;
