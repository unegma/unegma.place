import React from "react";
import useSceneInteractions from "../hooks/useSceneInteractions";

export function Grid() {
  const { gridOn } = useSceneInteractions();

  return (
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
  )
}
