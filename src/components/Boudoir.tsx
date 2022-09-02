import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/boudoir-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh
    Mesh_0001: THREE.Mesh
  }
  materials: {
    Material_0: THREE.MeshStandardMaterial
    material_0: THREE.MeshBasicMaterial
  }
}

export default function Boudoir({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(spaceURL, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry} material={materials.Material_0} position={[0, 0, 1]} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0001.geometry} material={materials.material_0} position={[0, 0, 1]} />
    </group>
  )
}

useGLTF.preload(spaceURL)
