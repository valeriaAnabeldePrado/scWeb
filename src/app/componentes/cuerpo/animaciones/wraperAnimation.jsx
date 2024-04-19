"use client";
import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import gsap from "gsap";

const WraperAnimation = ({ children }) => {
  const [empieza, setEmpieza] = useState("30% center");
  const [finaliza, setFinaliza] = useState("+=500%");

  const handleResize = useCallback(() => {
    const ancho = window.innerWidth;
    if (ancho < 900) {
      setEmpieza("35% center");
      setFinaliza("+=410%");
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  console.log(empieza);
  console.log(finaliza);
  //Para que la seccion de servicios se visualice por sobre encima de la esfera de conoce nuestras propuestas
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".contenedor-animacion", {
        y: -300,
        scrollTrigger: {
          trigger: ".seccionEsfera",
          start: "200% center",
          end: "300% center",
          scrub: 1,
        },
      });
      return () => ctx.revert();
    });

    //para que esto ande normalmente, sacarle este wraper para la clase .contenedor animacion, es decir que este estatica porque entra en conflicto con muchos estilos, sino queda asi
  }, []);
  //Animacion de cada card
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contenedor-stycki",
        scrub: 2,
        start: () => empieza,
        end: () => finaliza,
        markers: true,
        duration: 10,
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
    tl.to(".section5", {
      width: "100%",
      opacity: "1",
      left: "0",
      borderRadius: "0",
      duration: 2,
    });
    tl.to(".section6", {
      width: "100%",
      opacity: "1",
      left: "0",
      borderRadius: "0",
      duration: 2,
    });
    return () => tl.kill();
  }, [empieza, finaliza]);

  return <div>{children}</div>;
};

export default WraperAnimation;
