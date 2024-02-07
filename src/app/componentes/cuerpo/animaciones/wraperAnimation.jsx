"use client";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const WraperAnimation = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".seccionEsfera",
        start: "210% center",
        end: "300% center",
        scrub: 1,
        markers: true,
      },
    });
    timeline.to(".contenedor-animacion", {
      y: -300,
    });
    //para que esto ande normalmente, sacarle este wraper para la clase .contenedor animacion, es decir que este estatica porque entra en conflicto con muchos estilos, sino queda asi
  }, []);
  return <div>{children}</div>;
};

export default WraperAnimation;
