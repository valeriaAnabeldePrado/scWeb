"use client";
import React, { useEffect, useRef } from "react";
import { animateTextoHero, paralaxEsferas } from "./animaciones/animacion";
import "../styles.scss";
import { useSelector } from "react-redux";
import ResizeW from "ana/app/redux/useResize";
import ScDesktop from "./scDesktop";
import ScTelephone from "./scTelephone";

const Hero = () => {
  const heroRef = useRef(null);

  const valorRes = useSelector((state) => state.valorTamanio.tamanio);

  useEffect(() => {
    animateTextoHero();
    paralaxEsferas();
  }, []);

  return (
    <>
      <ResizeW>
        <div className="hero-cuerpo" ref={heroRef}>
          <img src="./esferaOsc.png" alt="esfera" className="esfera esfera1" />
          <img src="./blopesfera.png" alt="esfera" className="esfera esfera2" />
          <h4 className="textoHero">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            provident fugit sequi! Tenetur aut nostrum nihil labore
            voluptatibus, vel eaque, animi, iure ab ut nesciunt assumenda id
            omnis praesentium nulla.
          </h4>
          {valorRes <= 600 ? <ScTelephone /> : <ScDesktop />}
        </div>
      </ResizeW>
    </>
  );
};

export default Hero;
