"use client";
import React, { memo } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ShapeDistor = () => {
  const sphereRef = useRef(null);
  const esfera2 = useRef(null);
  const { nodes, materials } = useGLTF("/burbu.glb");

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
      { opacity: 1, top: "20%", transform: "translateY(0)" },
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
          position={[-10, 3, -12]}
          scale={1.5}
          rotation={[0.343, 0.825, 0.289]}
        ></mesh>
      </group>

      <group name="Scene">
        <mesh
          ref={sphereRef}
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          position={[-5, -1.5, 10]}
          rotation={[12, 10, 9]}
          scale={3}
        />
      </group>

      <directionalLight position={[-5, 2, 15]} intensity={2} />
      <directionalLight position={[-10, 6, -10]} intensity={5} />
      <directionalLight position={[20, 6, -35]} intensity={12} />
      <Environment path="/envA" />
    </>
  );
};

export default ShapeDistor;
