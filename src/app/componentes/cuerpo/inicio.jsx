"use client";
import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles.scss";
const Inicio = ({ children }) => {
  const elReff = useRef();
  useGSAP(
    () => {
      gsap.to("#inicioOpacidad", { opacity: 1 });
    },

    { scope: elReff }
  );
  return (
    <section ref={elReff}>
      <div className="contenedorPad" id="inicioOpacidad">
        {children}
      </div>
      ;
    </section>
  );
};

export default Inicio;
