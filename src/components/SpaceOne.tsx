import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense} from "react";

export default function SpaceOne({space, cameraPosition}: any) {
  const { player } = useXR();

  return (

    <VRCanvas>
      <DefaultXRControllers />

      {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
      <OrbitControls enableZoom={false} enablePan={false} />

      <ambientLight/>
      <pointLight intensity={3} position={[0, 0, 0]}/>
      <PerspectiveCamera position={cameraPosition} makeDefault/>

      <Suspense fallback={<Html className="white">loading 3d view..</Html>}>
        {space}
      </Suspense>
    </VRCanvas>
  )
}
