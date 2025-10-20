import React, { useState } from 'react';

const ErrorProneComponent: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('This is a test error!');
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>Error Test Component</h3>
      <p>Click the button below to trigger an error and test the Error Boundary:</p>
      <button 
        onClick={() => setShouldThrow(true)}
        style={{
          backgroundColor: '#ff4444',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorProneComponent;
