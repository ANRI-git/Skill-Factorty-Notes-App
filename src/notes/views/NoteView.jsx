import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { setActiveNote } from '../../store/notes/noteSlice';
import { startSaveNote } from '../../store/notes/thunks';
import { ImageGalery, UploadImagesButton } from '../components';
import Swal from 'sweetalert2';

const formValid = {
  title: [
    [
      (value) => value.length > 4,
      'El título debe contener al menos 4 caracteres',
    ],
  ],
  body: [
    [
      (value) => value.length > 6,
      'El cuerpo debe contener al menos 6 caracteres',
    ],
  ],
};

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, isSaving, messageSaved } = useSelector(
    (state) => state.note
  );
  const {
    body,
    title,
    onInputChange,
    formState,
    date,
    titleValid,
    bodyValid,
    isFormValid,
  } = useForm(activeNote, formValid);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <UploadImagesButton />
        <Button sx={{ padding: 2 }} onClick={onSaveNote} disabled={isSaving}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{
            border: 'none',
            mb: 1,
          }}
          name='title'
          value={title}
          onChange={onInputChange}
          error={!!titleValid}
          helperText={titleValid}
        />
        <TextField
          type='text'
          variant='filled'
          placeholder='Descripción'
          multiline
          minRows={5}
          fullWidth
          name='body'
          value={body}
          onChange={onInputChange}
          error={!!bodyValid}
          helperText={bodyValid}
        />
      </Grid>
      <ImageGalery images={activeNote.imagesUrls} />
    </Grid>
  );
};
