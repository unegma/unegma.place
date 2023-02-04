import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Menu} from "@mui/icons-material";

export default function NavBar(
  {toggleLeftSideDrawer,firstPerson, setShowBookingModal, showBookingModal, showInfoModal, setShowInfoModal, pointerControls}:
    any) {


  /**
   * returnHome
   */
  const returnHome = () => {
    window.location.replace(window.location.origin);
  };

  const handleHamburgerClick = (event: any) => {
    if (firstPerson) {
      setTimeout(() => {
        // @ts-ignore
        pointerControls.current.unlock()
      },100)
    } else {
      toggleLeftSideDrawer(event); // don't show in first person mode
    }
  }

  const handleClickBody = () => {
    if (firstPerson) {
      setTimeout(() => {
        // @ts-ignore
        pointerControls.current.unlock()
      },100)
    }
  }

  return (
    <Box component="div" sx={{ flexGrow: 1 }} className="navBar" onClick={() => {handleClickBody()}}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <div className={`hamburger-button`}>
            <Menu className="pointer" style={{ color: "#615438", margin: "4px 10px 0 -5px" }} onClick={(event: any) => {handleHamburgerClick(event)}}/>
          </div>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }} >
            <span style={{color: "#e3dbce"}} className="main-title" onClick={() => returnHome()}>{process.env.REACT_APP_NAV_TITLE}</span>
          </Typography>
          {/*<Button color="error" variant="contained" onClick={() => {setShowInfoModal(!showInfoModal)}}>Book</Button>*/}
          {/*<Button color="inherit" variant="outlined" href={`${process.env.REACT_APP_HOME_URL}`} target="_blank">Membership</Button>*/}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
