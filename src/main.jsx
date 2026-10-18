import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import App from './App.jsx';
import './styles/globals.css';

// FontAwesome: matikan injeksi CSS otomatis (CSS sudah diimpor manual di atas)
// agar tidak terjadi layout shift saat ikon pertama dirender.
config.autoAddCss = false;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
