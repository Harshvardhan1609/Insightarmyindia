/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 robot.gltf --transform
Author: codyc2228 (https://sketchfab.com/codyc2228)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lovedeathrobots-fb5ae6992cf944cba6a2ac79e15202a1
Title: love,death,robots
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/robot-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.BlackMetal} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.ButterflyBody} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.ButterflyWings} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Glow} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.OrangePaint} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Stripes} />
      </group>
    </group>
  )
}

useGLTF.preload('/robot-transformed.glb')