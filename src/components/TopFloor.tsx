import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/blacks-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh
    Mesh_0001: THREE.Mesh
  }
  materials: {
    ['material_0.002']: THREE.MeshBasicMaterial
    ['material_0.003']: THREE.MeshBasicMaterial
  }
}

export default function TopFloor({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(spaceURL, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry} material={materials['material_0.002']} position={[0, 0, -4.89]} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0001.geometry} material={materials['material_0.003']} position={[0, 0, -4.89]} />
    </group>
  )
}

useGLTF.preload(spaceURL)
