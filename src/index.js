import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ParallaxProvider>
  </React.StrictMode>
);

reportWebVitals();
