import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import AddExpression from './pages/AddExpression';
import Dashboard from './pages/Dashboard';
import CreateDocument from './pages/CreateDocument';
// import './styles/Main.css'; 
function App() {
  return (
    <div
			className='min-h-screen bg-gradient-to-br
    from-gray-900 via-black to-emerald-900 flex items-center justify-center relative overflow-hidden'
		>
      <Navbar />

      <div className="main-container">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="components-container">
                <h2>Welcome to the Main Page</h2>
                <Link to="/add-expression">
                <button onClick={() => handleButtonClick('add-expression')}>Add Expression</button>
                </Link>
                <Link to="/dashboard">
                <button onClick={() => handleButtonClick('dashboard')}>Write Documents</button>
                </Link>
                <Link to="/create-document">
                <button onClick={() => handleButtonClick('create-document')}>See Your Expression</button>
                </Link>
              </div>
            } 
          />
          <Route path="/add-expression" element={<AddExpression />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-document" element={<CreateDocument />} />
          
        </Routes>
      </div>
      </div>
  );
}
export default App;
