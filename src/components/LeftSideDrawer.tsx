import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {ExpandLess, ExpandMore, Menu} from "@mui/icons-material";
import {useState} from "react";
import {Collapse, ListItemIcon, MenuItem} from "@mui/material";

export default function LeftSideDrawer(
  {drawerOpen, toggleLeftSideDrawer, setShowImages, setShowInfoModal, showMenuModal, setShowMenuModal}:
    {drawerOpen: any, toggleLeftSideDrawer: Function, setShowImages: Function, setShowInfoModal: Function, showMenuModal: boolean, setShowMenuModal: Function}) {

  function openMenu(name: string) {
    setShowMenuModal(true)
  }

  const myList = {
    title: "The Space",
    items: [
      {
        key: 'top-floor',
        name: "Top Floor",
      },
      {
        key: 'middle-floor',
        name: "Middle Floor",
      },
      {
        key: 'boudoir',
        name: "Boudoir",
      },
      {
        key: 'gallery',
        name: "Gallery",
      }
    ]
  };

  return (
    <Drawer
      open={drawerOpen}
      onClose={(event:any) => {toggleLeftSideDrawer(event)}}
      PaperProps={{
        sx: {
          backgroundColor: "black",
          color: "white",
        }
      }}
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
            <ListItem key={'nav'} disablePadding>
              <Typography className={`main-title main-title-navbar`} variant="h6" component="div" sx={{ flexGrow: 1 }}
                          onClick={(event:any) => {toggleLeftSideDrawer(event)}}>
                {process.env.REACT_APP_NAV_TITLE}
              </Typography>
            </ListItem>
          </Link>
        </List>

        <Divider className='light-divider'/>

        <List>
          {/*{['Photos', 'Info', 'VR', 'CLOSE BUTTON', 'BOOK THIS ROOM'].map((text, index) => (*/}

          <Link to="/" className="drawer-link">
            <ListItem key={'home'} disablePadding>
              <ListItemButton>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>

        <Divider className='light-divider' />

        <MultiLevel item={myList} />

        <Divider className='light-divider' />

        <List>
          <ListItem key={'spaceone'} disablePadding onClick={() => setShowInfoModal(true)}>
            <ListItemButton>
              <ListItemText primary={'Info'} />
            </ListItemButton>
          </ListItem>

          <ListItem key={'home'} disablePadding onClick={() => setShowImages(true)}>
            <ListItemButton>
              <ListItemText primary={'Photos'} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider className='light-divider' />

        <List>
          <ListItem key={'menus'} disablePadding onClick={() => openMenu('menus')}>
            <ListItemButton>
              <ListItemText primary={'Menus'} />
            </ListItemButton>
          </ListItem>
        </List>

        <div className={`buttons-container buttons-container--left`}>
          <Menu className="pointer" style={{ color: "white", margin: "0 4px" }} onClick={(event) => {toggleLeftSideDrawer(event)}}/>
        </div>

      </Box>
    </Drawer>
  )
}

const MultiLevel = ({ item }: any) => {

  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <ListItem button onMouseOver={handleClick}>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child: any, key: any) => (
            <SingleLevel key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const SingleLevel = ({ item }: any) => {
  return (
    <Link to={`/${item.key}`} className="drawer-link">
      <ListItem key={`${item.key}`} disablePadding>
        <ListItemButton>
          <ListItemText primary={`${item.name}`} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
