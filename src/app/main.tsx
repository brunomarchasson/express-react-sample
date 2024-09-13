import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import Toasts from './services/toast/Toasts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toasts />
  </StrictMode>,
);
