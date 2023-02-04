import React from "react";
import useSceneInteractions from "../hooks/useSceneInteractions";
import {Button} from "@mui/material";
import {Person} from "@mui/icons-material";

export function FirstPersonSelector({}) {
  const { toggleFirstPerson } = useSceneInteractions();

  const handleChange = () => {
    toggleFirstPerson();
  };

  return (
    <div style={{position: "absolute", bottom: "5vh", left: "45%", zIndex: "99"}}>
      <Button onClick={() => {handleChange()}} variant="outlined" style={{color: "white", borderColor: "white"}}><Person/>&nbsp;&nbsp;First Person</Button>
    </div>
  )
}
