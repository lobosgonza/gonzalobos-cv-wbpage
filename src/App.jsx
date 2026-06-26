// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioLayout from './PortfolioLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Si entran a la raíz, los redirigimos a español por defecto */}
        <Route path="/" element={<Navigate to="/es" replace />} />

        {/* Rutas físicas para el contenido indexable */}
        <Route path="/es" element={<PortfolioLayout lang="es" />} />
        <Route path="/en" element={<PortfolioLayout lang="en" />} />

        {/* Comodín por si escriben cualquier otra cosa */}
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;