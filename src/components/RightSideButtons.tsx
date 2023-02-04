import {Chair, ChairOutlined, ZoomIn, ZoomOut} from "@mui/icons-material";
import GridOnIcon from "@mui/icons-material/GridOn";
import React from "react";
import useSceneInteractions from "../hooks/useSceneInteractions";

export function RightSideButtons({}) {
  const { toggleFurnished, toggleGrid, toggleZoom, zoomOn, furnished } = useSceneInteractions();

  return (
    <div className={`buttons-container buttons-container--mid-right`}>
      { furnished && (
        <Chair className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleFurnished()}}/>
      )}
      { !furnished && (
        <ChairOutlined className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleFurnished()}}/>
      )}
      <GridOnIcon className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleGrid()}}/>

      { zoomOn && (
        <ZoomIn className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoom()}}/>
      )}
      { !zoomOn && (
        <ZoomOut className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoom()}}/>
      )}
    </div>
  )
}
