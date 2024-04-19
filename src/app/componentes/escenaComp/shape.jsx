"use client";
import React, { memo } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const ShapeDistor = () => {
  const [posision, setPosicion] = useState([-5, -1.5, 6]);
  const [posisionB, setPosicionB] = useState([-10, 3, -8]);
  const [toop, seTtoop] = useState(15);
  const [traslat, seTtraslat] = useState(0);
  const sphereRef = useRef(null);
  const esfera2 = useRef(null);
  const { nodes, materials } = useGLTF("/burbu.glb");
  const { size } = useThree();

  useEffect(() => {
    const handleResize = () => {
      const ancho = size.width;
      if (ancho < 700) {
        setPosicion([-5, -6, 2]);
        setPosicionB([-10, 3, -3]);
        seTtoop(0);
        seTtraslat(13);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size.width]);

  useEffect(() => {
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

    const scrollAnim = (object, props, stagger = "<") => {
      timeline.to(object, { ...props }, stagger);
    };
    //position={[-10, 3, -7]}
    scrollAnim(esfera2.current.position, { x: -8, y: 2, z: 10 });
    scrollAnim(esfera2.current.rotation, { x: 6, y: 7, z: 1 }, "<");

    scrollAnim(sphereRef.current.scale, { x: 11, y: 11, z: 11 }, "<");
    scrollAnim(sphereRef.current.rotation, { x: 8, y: 9, z: 12 }, "<");
    scrollAnim(sphereRef.current.position, { x: -5, y: 0, z: 0 }, "<");

    timeline.to(
      ".titlee",
      { opacity: 1, top: `${toop}%`, transform: `translateY(-${traslat}%)` },
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
          position={posisionB}
          scale={1.5}
          rotation={[0.343, 0.825, 0.289]}
        ></mesh>

        <mesh
          ref={sphereRef}
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          position={posision}
          rotation={[12, 10, 9]}
          scale={3}
        />

        <directionalLight position={[-5, 2, 15]} intensity={2} />
        <directionalLight position={[-10, 6, -10]} intensity={5} />
        <directionalLight position={[20, 6, -35]} intensity={12} />
        <Environment path="/envA" />
      </group>
    </>
  );
};

export default ShapeDistor;
