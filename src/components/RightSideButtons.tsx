import {Chair, ChairOutlined, ZoomIn, ZoomOut} from "@mui/icons-material";
import GridOnIcon from "@mui/icons-material/GridOn";
import React from "react";
import {useStore} from '../store';

export function RightSideButtons({}) {
  const { reset, set } = useStore((
    { actions: { toggleFurnished, toggleGridOn, toggleZoomOn }, zoomOn, furnished }) => (
      { toggleFurnished, toggleGridOn, toggleZoomOn, zoomOn, furnished }
    ));

  return (
    <div className={`buttons-container buttons-container--mid-right`}>
      { furnished && (
        <Chair className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleFurnished()}}/>
      )}
      { !furnished && (
        <ChairOutlined className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleFurnished()}}/>
      )}
      <GridOnIcon className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleGridOn()}}/>

      { zoomOn && (
        <ZoomIn className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoomOn()}}/>
      )}
      { !zoomOn && (
        <ZoomOut className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoomOn()}}/>
      )}
    </div>
  )
}
