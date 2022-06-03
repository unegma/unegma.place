import React, { Suspense } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Space from "./components/Space";
import {DefaultXRControllers, useXR, VRCanvas} from '@react-three/xr';
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {CameraAltOutlined, InfoOutlined} from "@mui/icons-material";

function App() {
  const { player } = useXR();

  return (
    <div className="App">
      <NavBar />

      <VRCanvas>
        <DefaultXRControllers />

        {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
        <OrbitControls enableZoom={false} />

        <ambientLight/>
        <pointLight intensity={3} position={[0, 0, 0]}/>
        <PerspectiveCamera position={[5,5,5]} makeDefault/>

        <Suspense fallback={<Html className="white">loading..</Html>}>
          <Space />
        </Suspense>
      </VRCanvas>

      <div className="buttons-container">
        <CameraAltOutlined className="pointer" style={{ color: "white", margin: "0 4px" }}/>
        {/*<InfoOutlined className="pointer" style={{ color: "white", margin: "0 4px" }}/>*/}
      </div>
    </div>
  );
}

export default App;
