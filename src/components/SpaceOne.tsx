import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Html, Loader, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense, useState} from "react";
import GridOnIcon from "@mui/icons-material/GridOn";
import {ZoomIn, ZoomOut} from "@mui/icons-material";
import {RightSideButtons} from "./RightSideButtons";
import useSceneInteractions from "../hooks/useSceneInteractions";
import {SpaceSelector} from "./SpaceSelector";

export default function SpaceOne({space, cameraPosition}: { space: any, cameraPosition: any}) {
  const { player } = useXR();
  const { gridOn, zoomOn, target } = useSceneInteractions();

  return (
    <>
      <RightSideButtons />
      <SpaceSelector />
      <Loader />

      <VRCanvas>
        <DefaultXRControllers />

        {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
        <OrbitControls enableZoom={zoomOn} enablePan={true} target={target} />

        <ambientLight/>
        <pointLight intensity={3} position={[0, 0, 0]}/>
        <PerspectiveCamera position={cameraPosition} makeDefault/>

        <group visible={gridOn}>
          <gridHelper position={[0,-1.4,-3.81]}/>

          <gridHelper position={[0,-1.4,6.19]}/>
          <gridHelper position={[-10,-1.4,6.19]}/>
          <gridHelper position={[-10,-1.4,-3.81]}/>
          <gridHelper position={[-10,-1.4,-13.81]}/>
          <gridHelper position={[0,-1.4,-13.81]}/>
          <gridHelper position={[10,-1.4,-13.81]}/>
          <gridHelper position={[10,-1.4,-3.81]}/>
          <gridHelper position={[10,-1.4,6.19]}/>
        </group>

        <Suspense>
          {space}
        </Suspense>
      </VRCanvas>
    </>
  )
}
