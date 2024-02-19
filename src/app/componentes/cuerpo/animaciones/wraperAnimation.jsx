"use client";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const WraperAnimation = ({ children }) => {
  //Para que la seccion de servicios se visualice por sobre encima de la esfera de conoce nuestras propuestas
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".seccionEsfera",
        start: "200% center",
        end: "300% center",
        scrub: 1,
        markers: false,
      },
    });
    timeline.to(".contenedor-animacion", {
      y: -300,
    });
    //para que esto ande normalmente, sacarle este wraper para la clase .contenedor animacion, es decir que este estatica porque entra en conflicto con muchos estilos, sino queda asi
  }, []);
  //Animacion de cada card
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contenedor-stycki",
        scrub: 2,
        start: "52% center",
        end: "+=290%",
        markers: false,
        duration: 6,
      },
    });

    tl.to(".section2", {
      width: "100%",
      opacity: "1",
      left: "0",
      borderRadius: "0",
      duration: 2,
    });
    tl.to(".section3", {
      width: "100%",
      opacity: "1",
      left: "0",
      borderRadius: "0",
      duration: 2,
    });
    tl.to(".section4", {
      width: "100%",
      opacity: "1",
      left: "0",
      borderRadius: "0",
      duration: 2,
    });
  }, []);

  return <div>{children}</div>;
};

export default WraperAnimation;
