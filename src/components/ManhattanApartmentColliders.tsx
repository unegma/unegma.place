/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier';

type GLTFResult = GLTF & {
  nodes: {
    ceiling: THREE.Mesh
    floor: THREE.Mesh
    Plane: THREE.Mesh
    Plane001: THREE.Mesh
    Plane002: THREE.Mesh
    Plane003: THREE.Mesh
    Plane004: THREE.Mesh
    Plane005: THREE.Mesh
    Plane006: THREE.Mesh
    Plane007: THREE.Mesh
    Plane008: THREE.Mesh
    Plane009: THREE.Mesh
    Plane010: THREE.Mesh
    Plane011: THREE.Mesh
    Plane012: THREE.Mesh
    Cube005: THREE.Mesh
    Cube006: THREE.Mesh
  }
  materials: {}
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/manhattan-apartment-colliders.gltf`;

  const group = useRef<THREE.Group>(null!)
  const { nodes, materials } = useGLTF(spaceURL) as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="ceiling" castShadow receiveShadow geometry={nodes.ceiling.geometry} material={nodes.ceiling.material} position={[0.32, 1.19, 0.47]} scale={[6.18, 1, 2.01]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="floor" castShadow receiveShadow geometry={nodes.floor.geometry} material={nodes.floor.material} position={[0.32, -1.48, 0.47]} scale={[6.18, 1, 2.01]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane" castShadow receiveShadow geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[-1.61, -0.15, -0.83]} rotation={[-Math.PI / 2, 0, 0]} scale={[4.19, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane001" castShadow receiveShadow geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} position={[-1.61, -0.15, 1.91]} rotation={[-Math.PI / 2, 0, 0]} scale={[4.19, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane002" castShadow receiveShadow geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[4.79, -0.15, -1.4]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.1, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane003" castShadow receiveShadow geometry={nodes.Plane003.geometry} material={nodes.Plane003.material} position={[4.79, -0.15, 2.36]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.1, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane004" castShadow receiveShadow geometry={nodes.Plane004.geometry} material={nodes.Plane004.material} position={[6.54, -0.15, 0.54]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[2.1, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane005" castShadow receiveShadow geometry={nodes.Plane005.geometry} material={nodes.Plane005.material} position={[-5.81, -0.15, 0.54]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[2.1, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane006" castShadow receiveShadow geometry={nodes.Plane006.geometry} material={nodes.Plane006.material} position={[-2.33, -0.15, 1.07]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.8, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane007" castShadow receiveShadow geometry={nodes.Plane007.geometry} material={nodes.Plane007.material} position={[-1.47, -0.15, 1.07]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.8, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane008" castShadow receiveShadow geometry={nodes.Plane008.geometry} material={nodes.Plane008.material} position={[2.7, -0.15, 1.86]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.52, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane009" castShadow receiveShadow geometry={nodes.Plane009.geometry} material={nodes.Plane009.material} position={[2.7, -0.15, -1.32]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.52, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane010" castShadow receiveShadow geometry={nodes.Plane010.geometry} material={nodes.Plane010.material} position={[0.95, -0.15, 1.75]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.52, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane011" castShadow receiveShadow geometry={nodes.Plane011.geometry} material={nodes.Plane011.material} position={[1.83, -0.15, 1.29]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.85, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Plane012" castShadow receiveShadow geometry={nodes.Plane012.geometry} material={nodes.Plane012.material} position={[-1.92, -0.15, 0.24]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.44, 1, 1.33]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Cube005" castShadow receiveShadow geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[-4.15, -1.15, 0.78]} scale={[0.93, 0.22, 1.1]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
        <RigidBody colliders="cuboid" type="fixed">
          <mesh name="Cube006" castShadow receiveShadow geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[4.71, -1.25, 1]} scale={[1.51, 0.22, 1.18]}>
            <meshPhongMaterial color="#ff0000" opacity={0.001} transparent />
          </mesh>
        </RigidBody>
      </group>
    </group>
  )
}

useGLTF.preload('/manhattan-apartment-colliders.gltf')
