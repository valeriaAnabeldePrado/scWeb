"use client";
import React from "react";
import "../styles.scss";
import WraperAnimation from "./animaciones/wraperAnimation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const CardServicios = () => {
  const cardReff = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardReff.current,
        scrub: 2,
        start: "50% center",
        end: "bottom bottom",
        markers: false,
      },
    });
    tl.to(".section1", {
      width: "100vh",
      opacity: "1",
    });
    tl.to(".section2", {
      width: "100vh",
      opacity: "1",
      left: "0",
      borderRadius: "0",
    });
    tl.to(".section3", {
      width: "100vh",
      opacity: "1",
      left: "0",
      borderRadius: "0",
    });
  }, []);

  return (
    <>
      <WraperAnimation>
        <div className="contenedor-animacion">
          <section className="contenedor-stycki" ref={cardReff}>
            <div className="cont-cuadradoDos">
              {/* parte uno */}
              <section className="seccion-parrafos">
                <h2>Este es el titulo uno</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus doloremque nisi ea, illum id voluptates, atque ullam
                  explicabo quidem corporis dicta, harum repellendus dolorem
                  repudiandae reiciendis? Incidunt ipsa eveniet magni?
                </p>
              </section>
              {/*fin de parte uno */}
              {/* parte dos*/}
              <section className="seccion-parrafos">
                <h2>Este es el titulo dos</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus doloremque nisi ea, illum id voluptates, atque ullam
                  explicabo quidem corporis dicta, harum repellendus dolorem
                  repudiandae reiciendis? Incidunt ipsa eveniet magni?
                </p>
              </section>
              {/*fin de parte dos */}
              {/* parte tres */}
              <section className="seccion-parrafos">
                <h2>Este es el titulo tres</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus doloremque nisi ea, illum id voluptates, atque ullam
                  explicabo quidem corporis dicta, harum repellendus dolorem
                  repudiandae reiciendis? Incidunt ipsa eveniet magni?
                </p>
              </section>
              {/*fin de parte tres */}
            </div>
            <div className="sticky">
              <section className="imagen">
                {/* <section className="section1">section1</section>
              <section className="section2">section2</section>
              <section className="section3">section3</section> */}
              </section>
            </div>
          </section>
        </div>
      </WraperAnimation>
    </>
  );
};

export default CardServicios;
