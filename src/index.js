import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Particle from "./Particle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Particle id="tsparticles" />
    <App />
  </React.StrictMode>
);


