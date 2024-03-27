"use client";
import "../styles.scss";
import { Canvas } from "@react-three/fiber";
import ShapeDistor from "./shape";

const Esfera = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [7, 5, 0],
        }}
        shadows
        className="canvaAlt"
      >
        {/* <fog attach="fog" args={["#17171b", 1, 40]} /> */}
        <ShapeDistor />
        <ambientLight color={"#fff"} intensity={2} />
        <pointLight position={[0, 10, 15]} />
      </Canvas>
    </>
  );
};

export default Esfera;
