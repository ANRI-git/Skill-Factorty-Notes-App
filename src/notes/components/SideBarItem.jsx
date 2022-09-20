import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/notes/noteSlice';

export const SideBarItem = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => dispatch(setActiveNote(note))}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container direction='column'>
          <ListItemText
            primary={
              note.title.length > 15
                ? note.title.substring(0, 14) + '...'
                : note.title
            }
          />
          <ListItemText
            secondary={
              note.body.length > 25
                ? note.body.substring(0, 25) + '...'
                : note.body
            }
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
