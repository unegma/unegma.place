import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function InfoModal ({ firstPerson, pointerControls, showInfoModal, setShowInfoModal }: any) {

  const handleClose = () => {
    setShowInfoModal(false);

    if (firstPerson) {
      setTimeout(() => {
        // @ts-ignore
        pointerControls.current.unlock()
      },100)
    }
  };

  const handleBodyClicked = () => {
    if (firstPerson) {
      setTimeout(() => {
        // @ts-ignore
        pointerControls.current.unlock()
      },100)
    }
  }

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
      open={showInfoModal}
      onClose={handleClose}
      onClick={() => {handleBodyClicked()}}
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
    >
      <Box component="div" sx={modalStyle}>
        <HighlightOffIcon className="closeModalButton" onClick={() => { setShowInfoModal(false)}}/>
        <Typography variant="h3" className="secondaryColor">Info</Typography>

        <Typography className="secondaryColor">{process.env.REACT_APP_ADDRESS}</Typography>
        <Typography className="secondaryColor"><a href={`mailto:${process.env.REACT_APP_CONTACT}`}>{process.env.REACT_APP_CONTACT}</a></Typography>

        <br/>

        <iframe
          src={process.env.REACT_APP_GOOGLE_MAP_URL}
          width="100%" height="auto" className="info-map" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <hr/>
        <Typography className="secondaryColor">
          {/*Contribute here: <a target="_blank" href="https://github.com/unegma/spaces">Github</a>.<br/>*/}
          <span style={{float: 'right'}}>Made by <a target="_blank" href="https://unegma.com">unegma</a>.</span>
        </Typography>

        <br/>
        <br/>

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
