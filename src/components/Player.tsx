import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import React from "react";
import { useThree, useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"
// import Axe from "./Axe"

let SPEED = 7; // todo change to 6 or 7
// let JUMP_HEIGHT = 200; // for high level view

// let PLAYER_START_POSITION = [-0.05239903926849365, 1.2482167482376099, 4.106739044189453];
// let PLAYER_START_POSITION = [-40.63,26.39,-39.73]; // for debugging (top of invisible stairs)

const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

export function Player({ playerRef, pointerControls, jumpFunction}: any) {
  const rapier = useRapier()
  const { camera } = useThree()
  const [, get] = useKeyboardControls()

  /**
   *
   */
  useFrame((state) => {
    const { forward, backward, left, right, jump, action } = get()
    // @ts-ignore
    const velocity = playerRef.current.linvel()
    // @ts-ignore
    camera.position.set(...playerRef.current.translation()) // todo might not be needed

    // movement - backward, forward, left, right, are booleans which need converting to numbers
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)

    // todo something seems to break if press option and keys when running (remove tab indexes from everything in navbar (indluding title)

    // if (forward || backward || left || right) {  // todo this might be being called over and might not be needed (without it, the player keeps running
      direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
      // @ts-ignore
      // setPlayerPosition(playerRef.current.translation());
      // console.log('Player Position:', pos);
    // } else {
    //   todo this might be being called over and might not be needed (without it, the player keeps running
      // direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    // }
    // @ts-ignore
    playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })

    // jumping
    const world = rapier.world.raw()

    // @ts-ignore
    const ray = world.castRay(new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -1, z: 0 }))
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75

    // todo fix bug where jump triggers i after planting object... (can't seem to replicate)
    if (jump && grounded) { // @ts-ignore
      jumpFunction(playerRef);
    }
  })

  return (
    <>
      <RigidBody ref={playerRef} colliders={false} mass={1} type="dynamic" position={[0, 0, 0]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  )
}
