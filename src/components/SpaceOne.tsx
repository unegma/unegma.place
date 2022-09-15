import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense} from "react";

export default function SpaceOne({space, cameraPosition, gridOn, zoomOn}: any) {
  const { player } = useXR();

  return (

    <VRCanvas>
      <DefaultXRControllers />

      {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
      <OrbitControls enableZoom={zoomOn} enablePan={true} />

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

      <Suspense fallback={<Html className="white">loading 3d view..</Html>}>
        {space}
      </Suspense>
    </VRCanvas>
  )
}
