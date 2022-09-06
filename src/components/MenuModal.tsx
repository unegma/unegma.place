import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box} from "@mui/material";
import React, {useState} from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function MenuModal ({ showMenuModal, setShowMenuModal }: any) {

  const handleCloseMenuModal = () => {
    setShowMenuModal(false);
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

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Modal
      className="menu-modal"
      open={showMenuModal}
      onClose={handleCloseMenuModal}
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
    >
      <Box component="div" sx={modalStyle}>
        <HighlightOffIcon className="closeModalButton" onClick={() => { setShowMenuModal(false)}}/>

        <div>
          <Document file={`${process.env.REACT_APP_ASSETS_URL}/menus/a-la-carte-menu.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>

      </Box>
    </Modal>
  )
}
