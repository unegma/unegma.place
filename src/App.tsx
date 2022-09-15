import React, {useState} from 'react';
import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import {CameraAltOutlined, ChevronLeft, ChevronRight, InfoOutlined, Menu, ZoomIn, ZoomOut} from "@mui/icons-material";
import PhotoViewer from "./components/PhotoViewer";
import InfoModal from "./components/InfoModal";
import MenuModal from "./components/MenuModal";
import LeftSideDrawer from "./components/LeftSideDrawer";
import HomeScreen from "./components/HomeScreen";
import SpaceOne from "./components/SpaceOne";
import TopFloor from "./components/TopFloor";
import Boudoir from "./components/Boudoir";
import Gallery from "./components/Gallery";
import MiddleFloor from "./components/MiddleFloor";
import Dining from "./components/Dining";
import GridOnIcon from '@mui/icons-material/GridOn';
// import BookingModal from "./components/BookingModal";
const initialHelperText = '↺ or ⇉ Model';

function App() {
  const [showImages, setShowImages] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [gridOn, setGridOn] = useState(false);
  const [zoomOn, setZoomOn] = useState(false);
  const [helperText, setHelperText] = useState(initialHelperText);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

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

  const toggleGridOn = () => {
    setGridOn(!gridOn);

    if (!gridOn) {
      setHelperText('1 Square is approx 1m²');
    } else {
      setHelperText(initialHelperText);
    }
  };

  const toggleZoomOn = () => {
    setZoomOn(!zoomOn);

    if (!zoomOn) {
      alert('PLEASE BE AWARE\nThis model is a reduced quality scan\nThis will be more noticeable when zooming!')
      setHelperText(`⚲ or ${initialHelperText}`);
    } else {
      setHelperText(initialHelperText);
    }
  }

  const toggleLeftSideDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
      {
        return;
      }
      setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="App">
      {/*<CssBaseline /> todo add this? */}

      <NavBar
        showInfoModal={showInfoModal}
        setShowInfoModal={setShowInfoModal}
        toggleLeftSideDrawer={toggleLeftSideDrawer}
        showBookingModal={showBookingModal}
        setShowBookingModal={setShowBookingModal}
      />

      <InfoModal showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} />
      <MenuModal showMenuModal={showMenuModal} setShowMenuModal={setShowMenuModal} />
      {/*<BookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />*/}
      <PhotoViewer showImages={showImages} />

      <LeftSideDrawer
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
          key={'dining'}
          path="/dining"
          element={
            <SpaceOne zoomOn={zoomOn} gridOn={gridOn} cameraPosition={[5,5,5]} space={<Dining />}/>
          }
        />
        <Route
          key={'top-floor'}
          path="/top-floor"
          element={
            <SpaceOne zoomOn={zoomOn} gridOn={gridOn} cameraPosition={[9,9,9]} space={<TopFloor />}/>
          }
        />
        <Route
          key={'middle-floor'}
          path="/middle-floor"
          element={
            <SpaceOne zoomOn={zoomOn} gridOn={gridOn} cameraPosition={[5,5,5]} space={<MiddleFloor/>}/>
          }
        />
        <Route
          key={'boudoir'}
          path="/boudoir"
          element={
            <SpaceOne zoomOn={zoomOn} gridOn={gridOn} cameraPosition={[5,5,5]} space={<Boudoir/>}/>
          }
        />
        <Route
          key={'gallery'}
          path="/gallery"
          element={
            <SpaceOne zoomOn={zoomOn} gridOn={gridOn} cameraPosition={[5,5,5]} space={<Gallery/>}/>
          }
        />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <div className={`buttons-container buttons-container--left`}>
        <Menu className="pointer" style={{ color: "white", margin: "0 4px" }} onClick={(event) => {toggleLeftSideDrawer(event)}}/>
        <p className='helperText' onClick={() => {showHelperTextMessage()}}>{helperText}</p>
      </div>

      <div className={`buttons-container buttons-container--mid-right`}>
        <GridOnIcon className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleGridOn()}}/>

        { zoomOn && (
          <ZoomIn className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoomOn()}}/>
        )}
        { !zoomOn && (
          <ZoomOut className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoomOn()}}/>
        )}
      </div>

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
