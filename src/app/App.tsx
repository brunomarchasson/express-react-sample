import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './styles/main.scss';
import { router } from './router';

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
