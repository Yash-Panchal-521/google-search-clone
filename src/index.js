import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context/StateContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <StateContextProvider>
        <Router>
            <App />
        </Router>
    </StateContextProvider>
  </React.StrictMode>,
);

reportWebVitals();
