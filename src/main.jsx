// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
import App from './App';
import './index.css'; // Your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Wrap App with Router here */}
      <App />
    </Router>
  </React.StrictMode>
);
