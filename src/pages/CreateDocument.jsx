import React from 'react';

const CreateDocument = () => {
  return (
    <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.048)' , padding: '20px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
      <h2 style={{ color: '#bb86fc' }}>Create Document</h2>
      <textarea placeholder="Write your document content here..." />
      <button style={{ marginTop: '10px' }}>Save Document</button>
    </div>
  );
};

export default CreateDocument;
