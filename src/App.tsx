import React, { Suspense } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Space from "./components/Space";
import {DefaultXRControllers, useXR, VRCanvas} from '@react-three/xr';
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";

function App() {
  const { player } = useXR();

  return (
    <div className="App">
      <NavBar />

      <VRCanvas>
        <DefaultXRControllers />

        <OrbitControls />
        <ambientLight/>
        <pointLight intensity={3} position={[0, 0, 0]}/>
        <PerspectiveCamera position={[5,5,5]} makeDefault/>

        <Suspense fallback={<Html className="white">loading..</Html>}>
          <Space />
        </Suspense>
      </VRCanvas>
    </div>
  );
}

export default App;
