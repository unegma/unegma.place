/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useSceneInteractions from "../hooks/useSceneInteractions";

type GLTFResult = GLTF & {
  nodes: {
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Cube004: THREE.Mesh
  }
  materials: {}
}

export default function ApartmentClicks({setSelectedMesh}: any) {
  // const { setSelectedMesh } = useSceneInteractions();

  const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/appartment-clicks.gltf`;
  const group = useRef<THREE.Group>(null!)
  // @ts-ignore
  const { nodes } = useGLTF(spaceURL) as GLTFResult

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh name="Cube002" castShadow receiveShadow geometry={nodes.Cube002.geometry} position={[4.67, 0, 0.39]} scale={1.75} onClick={() => setSelectedMesh(1)}>
          <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
        </mesh>
        <mesh name="Cube003" castShadow receiveShadow geometry={nodes.Cube003.geometry} position={[0.69, 0, 0.39]} scale={1.75} onClick={() => setSelectedMesh(0)}>
          <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
        </mesh>
        <mesh name="Cube004" castShadow receiveShadow geometry={nodes.Cube004.geometry} position={[-3.89, 0, 0.39]} scale={1.75} onClick={() => setSelectedMesh(2)}>
          <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
        </mesh>
      </group>
    </group>
  )
}
