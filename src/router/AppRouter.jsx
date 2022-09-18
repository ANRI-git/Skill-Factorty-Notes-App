import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { NotesRoutes } from '../notes/routes/NotesRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path='/auth/*' element={<AuthRoutes />} />
      {/* NotesApp */}
      <Route path='/*' element={<NotesRoutes />} />
    </Routes>
  );
};
