"use client";
import React from "react";
import { useRef } from "react";
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
      tl.to([primerT.current, segundoT.current], {
        xPercent: -80,
        duration: 20,
        ease: "linear",
      }).to([primerT.current, segundoT.current], {
        xPercent: 0,
        duration: 20,
      });
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
