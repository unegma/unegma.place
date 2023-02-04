import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function WarningModal ({ showWarningModal, setShowWarningModal }: any) {

  const handleClose = () => {
    setShowWarningModal(false);
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    maxWidth: '90vw',
    minWidth: '85vw',
    maxHeight: '90vh',
    // minHeight: '85vh',
    overflow: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      className="info-modal"
      open={showWarningModal}
      onClose={handleClose}
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
    >
      <Box component="div" sx={modalStyle}>
        <HighlightOffIcon className="closeModalButton" onClick={() => { showWarningModal(false)}}/>
        <Typography variant="h3" className="secondaryColor">Info</Typography>



        <p style={{color: "red"}}><b>Please be aware that this is a reduced quality model to give a general feel of the space.</b></p>
        <p>Movement controls are in the bottom left (click for more info).</p>
        <p>Click the buttons on the right to toggle furniture and grid.</p>
        <p>Click 'First Person' to walk around in the space.</p>

        <hr/>
        {/*<Typography className="secondaryColor">*/}
        {/*  Contribute here: <a target="_blank" href="https://github.com/unegma/spaces">Github</a>.<br/>*/}
        {/*  <span style={{float: 'right'}}>Made by <a target="_blank" href="https://unegma.com">unegma</a>.</span>*/}
        {/*</Typography>*/}

        <div className={'infoModal__button-container'}>
          {/*todo fix errors if user clicks close too quickly*/}
          <Button className="closeInfoModalButton--large" variant="contained" color="primary" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  )
}
