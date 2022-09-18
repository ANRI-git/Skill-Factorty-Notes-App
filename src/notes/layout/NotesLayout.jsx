import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { Navbar, SideBar } from '../components';

const drawerWidth = 240;

export const NotesLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
