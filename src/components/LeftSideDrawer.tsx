import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";

export default function LeftSideDrawer(
  {drawerOpen, toggleLeftSideDrawer, setShowImages, setShowInfoModal}:
    {drawerOpen: any, toggleLeftSideDrawer: any, setShowImages: any, setShowInfoModal: any}) {

  return (
    <Drawer
      open={drawerOpen}
    >
      <Box
        component="div"
        sx={{ width: 250 }}
        role="presentation"
        onClick={(event: any) => {toggleLeftSideDrawer(event)}}
        onKeyDown={(event: any) => {toggleLeftSideDrawer(event)}}
      >
        <List>
          {/*{['Photos', 'Info', 'VR', 'CLOSE BUTTON', 'BOOK THIS ROOM'].map((text, index) => (*/}

          <Link to="/" className="drawer-link">
            <ListItem key={'home'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="/space" className="drawer-link">
            <ListItem key={'space'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'The Space'} />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>

        <Divider />

        <List>
          <ListItem key={'home'} disablePadding onClick={() => setShowImages(true)}>
            <ListItemButton>
              <ListItemText primary={'Photos'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'spaceone'} disablePadding onClick={() => setShowInfoModal(true)}>
            <ListItemButton>
              <ListItemText primary={'Info'} />
            </ListItemButton>
          </ListItem>
        </List>

      </Box>
    </Drawer>
  )
}
