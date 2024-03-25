"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FooterInfinito = () => {
  const primerT = useRef(null);
  const segundoT = useRef(null);
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(primerT.current, {
        xPercent: -100,
        duration: 20,
        ease: "linear",
      }).to(
        segundoT.current,
        {
          xPercent: -100,
          duration: 20,
          ease: "linear",
        },
        "-=20"
      );
    },
    { scope: containerRef }
  );

  return (
    <>
      <div ref={containerRef} className="contactanos-infinite">
        <h2 ref={primerT} className="contactanos-infinite-h2">
          ✶ SCSTUDIO ✶ SERVICIOS Y PRODUCTOS DIGITALES ✶
        </h2>
        <h2 ref={segundoT} className="contactanos-infinite-h2">
          SCSTUDIO ✶ SERVICIOS Y PRODUCTOS DIGITALES ✶
        </h2>
      </div>
    </>
  );
};

export default FooterInfinito;
