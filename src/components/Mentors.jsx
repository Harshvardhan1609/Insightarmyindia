import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";
import Chair from "./Chair";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Mentors = () => {
  return (
    <>
    <Canvas>
        <Stage environment="city" intensity={0.1}>
            <Chair />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
    </>
  );
};

export default Mentors;