import {Chair, ChairOutlined, ZoomIn, ZoomOut} from "@mui/icons-material";
import GridOnIcon from "@mui/icons-material/GridOn";
import React from "react";
import useSceneInteractions from "../hooks/useSceneInteractions";

export function RightSideButtons({firstPerson, pointerControls}: any) {

  const { toggleFurnished, toggleGrid, toggleZoom, zoomOn, furnished } = useSceneInteractions();

  const handleToggleFurnished = () => {
    toggleFurnished();

    if (firstPerson) {
      setTimeout(() => {
        // @ts-ignore
        pointerControls.current.unlock()
      },100)
    }
  }

  const handleToggleGrid = () => {
    toggleGrid();

    if (firstPerson) {
      setTimeout(() => {
        // @ts-ignore
        pointerControls.current.unlock()
      },100)
    }
  }


  return (
    <div className={`buttons-container buttons-container--mid-right`}>
      { furnished && (
        <Chair className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {handleToggleFurnished()}}/>
      )}
      { !furnished && (
        <ChairOutlined className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {handleToggleFurnished()}}/>
      )}
      <GridOnIcon className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {handleToggleGrid()}}/>

      {/*{ zoomOn && (*/}
      {/*  <ZoomIn className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoom()}}/>*/}
      {/*)}*/}
      {/*{ !zoomOn && (*/}
      {/*  <ZoomOut className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoom()}}/>*/}
      {/*)}*/}
    </div>
  )
}
