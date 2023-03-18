import React from "react";
// import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-140.87, 0.13, 31.08]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142148966.geometry} material={materials.MaterialFBXASC032FBXASC0352142148966} />
            <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142148579.geometry} material={materials.MaterialFBXASC032FBXASC0352142148579} />
            <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142148017.geometry} material={materials.MaterialFBXASC032FBXASC0352142148017} />
            <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')