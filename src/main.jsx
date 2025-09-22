import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Importar favicon desde src/assets/images
import lgtaIcon from './assets/images/lgta.png';

// Crear y agregar el favicon dinámicamente
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = lgtaIcon;
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
