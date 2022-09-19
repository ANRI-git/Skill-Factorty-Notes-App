import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotesApp } from './NotesApp';
import { store } from './store/store';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <NotesApp />
    </Router>
    </Provider>
  </React.StrictMode>
);
