import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './context/DarkModeContext'; // ✅ Import context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ Context provider for dark mode support */}
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);

// ✅ Optional performance monitoring
reportWebVitals();
