import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/imperial-lecture-theatre-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh
  }
  materials: {
    ['material_0.006']: THREE.MeshBasicMaterial
  }
}

export default function Space({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(spaceURL, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry} material={materials['material_0.006']} />
    </group>
  )
}

useGLTF.preload(spaceURL)
