import React, { useState } from 'react';
import '../styles/AddExpression.css'; // Same CSS file for styles

const AddExpression = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleAddExpression = () => {
    if (url) {
      // Simulating adding the URL expression
      setMessage('Expression added successfully!');
      setUrl(''); // Clear input field after adding
      // Optional: You can add logic to handle the URL expression further here
    }
  };

  return (
    <div className="add-expression-container">
      <h2>Enter URL Expression</h2>
      <input
        type="url"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter the website URL"
        className="expression-input"
      />
      <button onClick={handleAddExpression} className="add-button">Add Expression</button>
      
      {message && <div className="success-message">{message}</div>} {/* Display success message */}
    </div>
  );
};

export default AddExpression;
