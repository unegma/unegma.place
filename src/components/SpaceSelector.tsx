import {Chair, ChairOutlined, ZoomIn, ZoomOut} from "@mui/icons-material";
import GridOnIcon from "@mui/icons-material/GridOn";
import React from "react";
import useSceneInteractions from "../hooks/useSceneInteractions";
import {Pagination, Stack} from "@mui/material";

export function SpaceSelector({}) {
  const { selectedMesh, setSelectedMesh, roomCount, roomNameArray, firstPerson } = useSceneInteractions();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSelectedMesh(value-1);
  };

  return (
    <>
      { !firstPerson && (
        <Stack className="room-paginator" spacing={2} style={{position: "absolute", right: "10vw", top: "10vh", zIndex: "99"}}>
          <p>Room: {roomNameArray[selectedMesh]}</p>
          <Pagination count={roomCount} color="primary" onChange={handleChange} />
        </Stack>
      )}
    </>
  )
}
