"use client";
import React, { memo } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ShapeDistor = memo(() => {
  const sphereRef = useRef(null);
  const esfera2 = useRef(null);
  const { nodes, materials } = useGLTF("/burbu.glb");
  useEffect(() => {
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
    return () => {
      timeline.kill();
    };
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
          rotation={[0.343, 0.825, 0.289]}
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
          rotation={[0.343, 0.825, 0.289]}
        />
      </group>

      <Environment preset="city" />
    </>
  );
});

export default ShapeDistor;
