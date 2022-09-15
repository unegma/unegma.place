import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/dining-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh
  }
  materials: {
    ['material_0.002']: THREE.MeshBasicMaterial
  }
}

export default function Dining({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(spaceURL, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null} position={[0,0,-1]}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry} material={materials['material_0.002']} rotation={[0, -0.3, 0]} />
    </group>
  )
}

useGLTF.preload(spaceURL)
