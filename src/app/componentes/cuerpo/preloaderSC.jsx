"use client";
import React, { useEffect } from "react";
import "../styles.scss";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const PreloaderSC = ({ setIsLoading }) => {
  const hHref = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });
      tl.to("#h1", { y: -2, opacity: 1, ease: "power2.out", duration: 1.2 })
        .to("#h2", { y: 0, ease: "power2.out", duration: 1.2 }, "0.2")
        .to("#h1", { x: -700, scale: 60, ease: "power2.out", duration: 1.4 })
        .to(
          "#h2",
          { x: -700, scale: 60, ease: "power2.out", duration: 1.4 },
          "<"
        );
    },

    { scope: hHref }
  );

  return (
    <div ref={hHref}>
      <section className="container-prel">
        <div className="container-H">
          <h2 id="h2" className="H h22">
            SC
          </h2>
          <h1 id="h1" className="H h11">
            SC
          </h1>
        </div>
      </section>
    </div>
  );
};

export default PreloaderSC;
