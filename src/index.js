// React no root do index.html
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

// Componets 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Assim é feita a vinculação do react com o index pela DOM, os imports são necessários para identificar ao index de onde vincular os components.
