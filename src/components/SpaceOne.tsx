import {VRCanvas, useXR} from "@react-three/xr";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
  KeyboardControls,
  Environment
} from "@react-three/drei";
import React, {Suspense, useEffect, useRef, useState} from "react";
import {RightSideButtons} from "./RightSideButtons";
import useSceneInteractions from "../hooks/useSceneInteractions";
import {SpaceSelector} from "./SpaceSelector";
import { Canvas } from "@react-three/fiber";
import {Physics} from "@react-three/rapier";
import {Player} from "./Player";
import {FirstPersonSelector} from "./FirstPersonSelector";
import {Grid} from "./Grid";

export default function SpaceOne({grounded, setGrounded, playerRef, jumpFunction, pointerControls, space, cameraPosition, setShowWarningModal, setShowWarningTwoModal}: any) {
  const { gridOn, zoomOn, target, firstPerson } = useSceneInteractions();

  // const [playerPosition, setPlayerPosition ] = React.useState<any>([0,10,0]);

  useEffect(() => {
    setShowWarningModal(true)
  },[])

  return (
    <>
      <RightSideButtons firstPerson={firstPerson} pointerControls={pointerControls}/>
      <SpaceSelector />
      <FirstPersonSelector setShowWarningModal={setShowWarningModal} firstPerson={firstPerson} setShowWarningTwoModal={setShowWarningTwoModal}/>
      <Loader />

      { firstPerson && (
        <>
          <KeyboardControls
            map={[
              { name: "forward", keys: ["ArrowUp", "w", "W"] },
              { name: "backward", keys: ["ArrowDown", "s", "S"] },
              { name: "left", keys: ["ArrowLeft", "a", "A"] },
              { name: "right", keys: ["ArrowRight", "d", "D"] },
              { name: "action", keys: ["e", "E"] },
              { name: "jump", keys: ["Space"] },
            ]}>
          <Canvas shadows camera={{ fov: 45 }}>
            <ambientLight/>
            <PointerLockControls ref={pointerControls} />
            <Physics gravity={[0, -30, 0]}>
              <Suspense>
                {space}
                <Player grounded={grounded} setGrounded={setGrounded} pointerControls={pointerControls} playerRef={playerRef} jumpFunction={jumpFunction} />
                <Grid />
                <Environment preset="park" background={true} />
              </Suspense>
            </Physics>
          </Canvas>
          </KeyboardControls>
        </>
      )}

      { !firstPerson && (
        <Canvas>
          {/*<DefaultXRControllers />*/}
          {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
          <OrbitControls enableZoom={zoomOn} enablePan={true} target={target} />

          <ambientLight/>
          <pointLight intensity={3} position={[0, 0, 0]}/>
          <PerspectiveCamera position={cameraPosition} makeDefault/>

          <Grid />

          <Suspense>
            {space}
          </Suspense>
        </Canvas>
      )}
    </>
  )
}
