import React, {Suspense, useEffect, useRef, useState} from "react";
import Button from "@mui/material/Button";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import NewYorkBlock from "./NewYorkBlock";
import {Environment, Loader, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Link} from "react-router-dom";
import * as THREE from "three";

const CameraAnimation = () => {
  const [started, setStarted] = useState(false)
  const vec = new THREE.Vector3();

  useEffect(() => {
    setStarted(true);
  });

  useFrame(state => {
    if (started) {
      state.camera.lookAt(0, 2, 0);
      state.camera.position.lerp(vec.set(6, 6, -4), .002)
    } return null
  })
  return null;
}

export default function HomeScreen({toggleLeftSideDrawer}: {toggleLeftSideDrawer: any}) {

  return (
    <>
      <div className="home-screen-cover">

        <div className="centre-overlay">
          <Link to="/apartment" className="main-link">
            <h1>Click to Enter</h1>
          </Link>
        </div>

        {/*<div className="home-screen-button-container">*/}
        {/*  <Button size='large' className="home-screen-button" variant='contained' onClick={(event:any) => {toggleLeftSideDrawer(event)}}>Enter</Button>*/}
        {/*</div>*/}
        <Loader />
        <Canvas>

          <CameraAnimation/>
          <OrbitControls
            enableZoom={false} enablePan={false} minDistance={30} maxDistance={40}
            minPolarAngle={1.5} maxPolarAngle={2}
          />


          {/*{ isMobile === true && (*/}
          {/*  <OrbitControls*/}
          {/*    enableZoom={false} enablePan={false} minDistance={4} maxDistance={10}*/}
          {/*    minPolarAngle={1} maxPolarAngle={1.75}*/}
          {/*    maxAzimuthAngle={2} minAzimuthAngle={-0.1}*/}
          {/*  />*/}
          {/*)}*/}
          <ambientLight/>
          <pointLight intensity={3} position={[0, 0, 0]}/>
          <PerspectiveCamera position={[40,40,40]} makeDefault/>

          <Suspense>
            <Environment preset="park" background={true} />

            <NewYorkBlock position={[0,-40,0]} />
          </Suspense>
        </Canvas>

      </div>
      {/*<div className="home-screen-image" style={{backgroundImage: `url(${process.env.REACT_APP_ASSETS_URL}/gallery.jpg)`}}/>*/}
    </>
  )
}
