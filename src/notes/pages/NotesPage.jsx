import { NoteAddOutlined } from '@mui/icons-material';
import { NotesLayout } from '../layout/NotesLayout';
import { Typography } from '@mui/material';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const NotesPage = () => {
  return (
    <NotesLayout>
      <NothingSelectedView />
    </NotesLayout>
  );
};
