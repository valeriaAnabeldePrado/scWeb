"use client";
import React from "react";
import { useEffect, useRef } from "react";
import "../styles.scss";
import {
  animateTituloA,
  animateTituloB,
  animateTextoHero,
  paralax,
} from "./animaciones/animacion";

const HeroVideo = () => {
  const heroRef = useRef(null);
  const tituloA = ["S", "C", "", "S", "T"];
  const tituloB = ["U", "D", "I", "O"];

  useEffect(() => {
    animateTituloA();
    animateTituloB();
    animateTextoHero();
    paralax();
  }, []);

  return (
    <>
      <div className="hero-cont" ref={heroRef}>
        <h4 className="textoHero">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          provident fugit sequi! Tenetur aut nostrum nihil labore voluptatibus,
          vel eaque, animi, iure ab ut nesciunt assumenda id omnis praesentium
          nulla.
        </h4>
        <div className="tituloHero">
          <div className="letrasCont">
            <section className="letras">
              {tituloA.map((letra, index) => (
                <p
                  key={index}
                  className={`${letra} ${
                    letra === "S" ? `posicion${index}` : ""
                  }`}
                >
                  {letra}
                </p>
              ))}
            </section>
            <section className="letras">
              {tituloB.map((letra, index) => (
                <p key={index} className={`${letra}`}>
                  {letra}
                </p>
              ))}
            </section>
          </div>
        </div>
        <video autoPlay loop muted playsInline className="video-back">
          {/* <source src="/banners/video.mp4" type="video/mp4" /> */}
        </video>
      </div>
    </>
  );
};

export default HeroVideo;
