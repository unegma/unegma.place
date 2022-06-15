import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-router-dom";

export default function LeftSideDrawer({drawerOpen, toggleLeftSideDrawer}: {drawerOpen: any, toggleLeftSideDrawer: any}) {

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
        {/*<List>*/}
        {/*  {['Home', 'Room1', 'Room2'].map((text, index) => (*/}
        {/*    <ListItem key={text} disablePadding>*/}
        {/*      <ListItemButton>*/}
        {/*        <ListItemIcon>*/}
        {/*          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
        {/*        </ListItemIcon>*/}
        {/*        <ListItemText primary={text} />*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*  ))}*/}
        {/*</List>*/}
        {/*<Divider />*/}
        <List>
          {/*{['Photos', 'Info', 'VR', 'CLOSE BUTTON', 'BOOK THIS ROOM'].map((text, index) => (*/}
            <ListItem key={'home'} disablePadding>
              <ListItemButton>
                {/*<ListItemIcon>*/}
                  {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                  <Link to="/">Home</Link>
                {/*</ListItemIcon>*/}
                {/*<ListItemText primary={text} />*/}
              </ListItemButton>
            </ListItem>
            <ListItem key={'spaceone'} disablePadding>
              <ListItemButton>
                {/*<ListItemIcon>*/}
              {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                <Link to="/spaceone">SpaceOne</Link>
                {/*</ListItemIcon>*/}
                {/*<ListItemText primary={text} />*/}
              </ListItemButton>
            </ListItem>
          {/*))}*/}
        </List>
      </Box>
    </Drawer>
  )
}
