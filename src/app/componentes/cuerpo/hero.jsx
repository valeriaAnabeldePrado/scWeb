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
          <img src="./esferaOsc.webp" alt="esfera" className="esfera esfera1" />
          <img
            src="./blopesfera.webp"
            alt="esfera"
            className="esfera esfera2"
          />
          <h4 className="textoHero">
            La innovación, el diseño y la tecnología se entrelazan para crear
            experiencias digitales que desafían lo convencional. Somos más que
            un estudio; somos vanguardia y transformación, ofrecemos soluciones
            únicas y personalizadas que elevan tu presencia. Lideramos una nueva
            era de innovación.
          </h4>
          {valorRes <= 600 ? <ScTelephone /> : <ScDesktop />}
        </div>
      </ResizeW>
    </>
  );
};

export default Hero;
