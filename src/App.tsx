import React, {Suspense, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Space from "./components/Space";
import {DefaultXRControllers, useXR, VRCanvas} from '@react-three/xr';
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {CameraAltOutlined, ChevronLeft, ChevronRight, InfoOutlined} from "@mui/icons-material";
import PhotoViewer from "./components/PhotoViewer";
import InfoModal from "./components/InfoModal";

function App() {
  const { player } = useXR();
  const [showImages, setShowImages] = useState(true);
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <InfoModal showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} />
      <PhotoViewer showImages={showImages} />

      <VRCanvas>
        <DefaultXRControllers />

        {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
        <OrbitControls enableZoom={false} enablePan={false} />

        <ambientLight/>
        <pointLight intensity={3} position={[0, 0, 0]}/>
        <PerspectiveCamera position={[5,5,5]} makeDefault/>

        <Suspense fallback={<Html className="white">loading 3d view..</Html>}>
          <Space />
        </Suspense>
      </VRCanvas>

      <div className="buttons-container">
        <InfoOutlined className="pointer" style={{ color: "white", margin: "0 4px" }} onClick={() => {setShowInfoModal(!showInfoModal)}}/>

        <div className="pointer" onClick={() => {setShowImages(!showImages)}}>
          <CameraAltOutlined  style={{ color: "white", margin: "0 4px" }} />
          { showImages && (
            <ChevronRight style={{ color: "white", margin: "0 4px" }} />
          )}
          { !showImages && (
            <ChevronLeft style={{ color: "white", margin: "0 4px" }} />
          )}
          </div>
      </div>
    </div>
  );
}

export default App;
