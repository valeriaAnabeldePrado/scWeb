"use client";
import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";
import { Environment, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense } from "react";
import { ScrollTrigger } from "gsap/all";

const ShapeDistor = (props) => {
  const { nodes, materials, animations } = useGLTF("/blob3.glb");

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
        esfera2.current.rotation,
        {
          x: 6,
          y: 7,
          z: 1,
        },
        "<"
      )
      .to(
        sphereRef.current.scale,
        {
          x: 10,
          y: 10,
          z: 10,
        },
        "<"
      )
      .to(
        sphereRef.current.rotation,
        {
          x: 0,
          y: 1.3,
          z: 2,
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
      <group name="Scene">
        <mesh
          ref={esfera2}
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          position={[-16, 0, -10]}
          rotation={[0, 1.3, 3]}
          scale={2}
        />
      </group>

      <group name="Scene">
        <mesh
          ref={sphereRef}
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          position={[0.57, 1.146, 2]}
          rotation={[5, 0, 3]}
          scale={2}
        />
      </group>

      <Suspense fallback={null}>
        <Environment
          files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
          path="env2/"
          blur={2}
        />
      </Suspense>
    </>
  );
};

export default ShapeDistor;
