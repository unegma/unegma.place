import React, {useRef, useState} from 'react';
import {
  Route, Routes
} from "react-router-dom";
import './App.scss';
import NavBar from "./components/NavBar";
import {
  CameraAltOutlined,
  Chair, ChairOutlined,
  ChevronLeft,
  ChevronRight,
  InfoOutlined,
  Menu,
  ZoomIn,
  ZoomOut
} from "@mui/icons-material";
import PhotoViewer from "./components/PhotoViewer";
import InfoModal from "./components/InfoModal";
import MenuModal from "./components/MenuModal";
import LeftSideDrawer from "./components/LeftSideDrawer";
import HomeScreen from "./components/HomeScreen";
import SpaceOne from "./components/SpaceOne";
import ManhattanApartment from "./components/ManhattanApartment";
import GridOnIcon from "@mui/icons-material/GridOn";
import useSceneInteractions from "./hooks/useSceneInteractions";
import {CssBaseline} from "@mui/material";
import WarningModal from "./components/WarningModal";
import WarningTwoModal from "./components/WarningTwoModal";
import MobileMovementButtons from "./components/MobileMovementButtons";
// import BookingModal from "./components/BookingModal";

export function jumpFunction(ref: any, grounded: boolean) {
  let JUMP_HEIGHT = 7.5;
  if (grounded) {
    ref.current.setLinvel({x: 0, y: JUMP_HEIGHT, z: 0})
  }
}

function App() {
  const { firstPerson, zoomOn, helperText, furnished, waterWorks, selectedMesh, setTarget, setSelectedMesh, setRoomCount, setRoomNameArray } = useSceneInteractions();

  const playerRef = useRef(null)
  const [grounded, setGrounded] = useState(false);
  const [playerLeft, setPlayerLeft] = useState(false);
  const [playerRight, setPlayerRight] = useState(false);
  const [playerForward, setPlayerForward] = useState(false);
  const [playerBackward, setPlayerBackward] = useState(false);

  const [showImages, setShowImages] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showWarningTwoModal, setShowWarningTwoModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const pointerControls = useRef(null);

  const toggleLeftSideDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
      {
        return;
      }
      setDrawerOpen(!drawerOpen);
  };

  const handleClickInfo = () => {
    setShowInfoModal(!showInfoModal)

    if (firstPerson) {
      setTimeout(() => {
        // @ts-ignore
        pointerControls.current.unlock()
      },100)
    }
  }

  const showHelperTextMessage = () => {
    let helperTextAlertMessage = 'Model can be rotated or panned: \n' +
      'Controls vary depending on your device.\n\n' +
      'Panning is usually two finger click and drag\n' +
      'Or holding Command/Ctrl and then clicking and dragging.'
    if(zoomOn) {
      helperTextAlertMessage = helperTextAlertMessage + '\n\nZoom is usually pinch or scroll with 2 fingers.'
    }

    alert(helperTextAlertMessage);
  };

  return (
    <div className="App">
      <CssBaseline />

      <NavBar
        firstPerson={firstPerson}
        pointerControls={pointerControls}
        showInfoModal={showInfoModal}
        setShowInfoModal={setShowInfoModal}
        toggleLeftSideDrawer={toggleLeftSideDrawer}
        showBookingModal={showBookingModal}
        setShowBookingModal={setShowBookingModal}
      />

      <div className={`buttons-container buttons-container--left-helper`}>
        <p className='helperText' onClick={() => {showHelperTextMessage()}}>{helperText}</p>
      </div>

      { firstPerson && (
        <MobileMovementButtons
          grounded={grounded} pointerControls={pointerControls} playerRef={playerRef} jumpFunction={jumpFunction}
          playerLeft={playerLeft}
          setPlayerLeft={setPlayerLeft}
          playerRight={playerRight}
          setPlayerRight={setPlayerRight}
          playerForward={playerForward}
          setPlayerForward={setPlayerForward}
          playerBackward={playerBackward}
          setPlayerBackward={setPlayerBackward}
        />
      )}

      <InfoModal firstPerson={firstPerson} pointerControls={pointerControls} showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} />
      <MenuModal showMenuModal={showMenuModal} setShowMenuModal={setShowMenuModal} />
      {/*<BookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />*/}
      <PhotoViewer showImages={showImages} />
      <WarningModal setShowWarningModal={setShowWarningModal} showWarningModal={showWarningModal} />
      <WarningTwoModal pointerControls={pointerControls} setShowWarningTwoModal={setShowWarningTwoModal} showWarningTwoModal={showWarningTwoModal} />

      <LeftSideDrawer
        firstPerson={firstPerson}
        pointerControls={pointerControls}
        drawerOpen={drawerOpen}
        toggleLeftSideDrawer={toggleLeftSideDrawer}
        setShowImages={setShowImages}
        setShowInfoModal={setShowInfoModal}
        setShowMenuModal={setShowMenuModal}
        showMenuModal={showMenuModal}
      />

      <Routes>
        <Route
          key={'home'}
          path="/"
          element={
            <HomeScreen toggleLeftSideDrawer={toggleLeftSideDrawer}/>
          }
        />

        <Route
          key={'apartment'}
          path="/apartment"
          element={
            <SpaceOne
              playerLeft={playerLeft}
              setPlayerLeft={setPlayerLeft}
              playerRight={playerRight}
              setPlayerRight={setPlayerRight}
              playerForward={playerForward}
              setPlayerForward={setPlayerForward}
              playerBackward={playerBackward}
              setPlayerBackward={setPlayerBackward}
              grounded={grounded}
              setGrounded={setGrounded}
              playerRef={playerRef}
              jumpFunction={jumpFunction}
              pointerControls={pointerControls}
              cameraPosition={[5,5,5]}
              setShowWarningModal={setShowWarningModal}
              setShowWarningTwoModal={setShowWarningTwoModal}
              space={
                <ManhattanApartment firstPerson={firstPerson} setRoomNameArray={setRoomNameArray} setRoomCount={setRoomCount} furnished={furnished} waterWorks={waterWorks} selectedMesh={selectedMesh} setTarget={setTarget} setSelectedMesh={setSelectedMesh}/>
              }
            />
          }
        />
        {/*<Route*/}
        {/*  key={'top-floor'}*/}
        {/*  path="/top-floor"*/}
        {/*  element={*/}
        {/*    <SpaceOne cameraPosition={[9,9,9]} space={<TopFloor />}/>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  key={'middle-floor'}*/}
        {/*  path="/middle-floor"*/}
        {/*  element={*/}
        {/*    <SpaceOne cameraPosition={[5,5,5]} space={<MiddleFloor/>}/>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  key={'boudoir'}*/}
        {/*  path="/boudoir"*/}
        {/*  element={*/}
        {/*    <SpaceOne cameraPosition={[5,5,5]} space={<Boudoir/>}/>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  key={'gallery'}*/}
        {/*  path="/gallery"*/}
        {/*  element={*/}
        {/*    <SpaceOne cameraPosition={[5,5,5]} space={<Gallery/>}/>*/}
        {/*  }*/}
        {/*/>*/}

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <div className="buttons-container">
        <InfoOutlined className="pointer" style={{ color: "white", margin: "0 4px" }} onClick={() => {handleClickInfo()}}/>

        <div className="pointer" onClick={() => {setShowImages(!showImages)}}>
          {/*<CameraAltOutlined  style={{ color: "white", margin: "0 4px" }} />*/}
          {/*{ showImages && (*/}
          {/*  <ChevronRight style={{ color: "white", margin: "0 4px" }} />*/}
          {/*)}*/}
          {/*{ !showImages && (*/}
          {/*  <ChevronLeft style={{ color: "white", margin: "0 4px" }} />*/}
          {/*)}*/}
          </div>
      </div>
    </div>
  );
}

export default App;
