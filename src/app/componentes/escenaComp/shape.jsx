"use client";
import * as THREE from "three";
import React from "react";
import holo from "../textures/texturaIriNegro.jpg";
import { useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ShapeDistor = () => {
  const textura = useLoader(THREE.TextureLoader, holo.src);
  const { camera, size } = useThree();
  const sphereRef = useRef();
  const esfera2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //Me obtiene los datos del objeto
    // console.log(sphereRef.current.rotation);
    // console.log(esfera2.current);
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".posicion",
        start: "top top",
        end: "+=" + window.innerHeight * 1.5,
        scrub: 1,
        markers: false,
        pin: true,
        pinSpacer: false,
        fastScrollEnd: 30000,
      },
    });

    timeline
      .to(esfera2.current.position, {
        x: 10,
        y: 5,
        z: 16,
      })
      .to(
        sphereRef.current.scale,
        {
          x: 4.5,
          y: 4.5,
          z: 5,
        },
        "<"
      );

    timeline.to(
      ".titlee",
      {
        opacity: 1,
        top: "20%",
        transform: "translateY(0)",
      },
      "-=40%"
    );
  }, []);
  return (
    <>
      <mesh
        receiveShadow={true}
        scale={0.4}
        position={[-16, 4, -3]}
        ref={esfera2}
      >
        <meshStandardMaterial map={textura} roughness={0.2} metalness={0.6} />
        <sphereGeometry args={[2, 20]} />
      </mesh>
      <mesh receiveShadow={true} scale={0.5} ref={sphereRef}>
        <meshStandardMaterial map={textura} roughness={0.2} metalness={0.6} />
        <sphereGeometry args={[2, 20]} />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

export default ShapeDistor;
