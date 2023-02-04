import React from "react";
import useSceneInteractions from "../hooks/useSceneInteractions";
import {Button} from "@mui/material";
import {Square, Person} from "@mui/icons-material";

export function FirstPersonSelector({firstPerson, setShowWarningTwoModal, setShowWarningModal}: any) {
  const { toggleFirstPerson } = useSceneInteractions();

  const handleChange = () => {
    toggleFirstPerson();
    if (!firstPerson) {
      setShowWarningTwoModal(true);
    } else {
      setShowWarningModal(true);
    }
  };

  return (
    <div className="first-person-selector">
      { firstPerson && (
        <Button onClick={() => {handleChange()}} variant="outlined" style={{color: "white", borderColor: "white"}}><Square/>&nbsp;&nbsp;Box Mode</Button>
      )}
      { !firstPerson && (
        <Button onClick={() => {handleChange()}} variant="outlined" style={{color: "white", borderColor: "white"}}><Person/>&nbsp;&nbsp;First Person</Button>
      )}

    </div>
  )
}
