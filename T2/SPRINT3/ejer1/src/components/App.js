import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Inicio';
import PerfilUsuario from './PerfilUsuario';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/usuario/:id" element={<PerfilUsuario />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
