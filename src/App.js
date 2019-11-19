import React from 'react';
import AppRouter from './router'
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
