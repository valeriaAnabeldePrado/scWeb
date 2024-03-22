"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";

const FooterInfinito = () => {
  const primerT = useRef(null);
  const segundoT = useRef(null);
  // let xperc = 0;
  // let direccion = 1;
  // useEffect(() => {
  //   requestAnimationFrame(animacion);
  // }, []);
  // const animacion = () => {
  //   gsap.set(primerT.current, { xperc: xperc });
  //   gsap.set(segundoT.current, { xperc: xperc });
  //   xperc += 0.25 * direccion;
  //   requestAnimationFrame(animacion);
  // };
  return (
    <>
      <div className="contactanos-infinite">
        <h2 ref={primerT} className="contactanos-infinite-h2">
          ✶ SCSTUDIO ✶ SERVICIOS Y PRODUCTOS DIGITALES ✶
        </h2>
        <h2 ref={segundoT} className="contactanos-infinite-h2">
          ✶ SCSTUDIO ✶ SERVICIOS Y PRODUCTOS DIGITALES ✶
        </h2>
      </div>
    </>
  );
};

export default FooterInfinito;
