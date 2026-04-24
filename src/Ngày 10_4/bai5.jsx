
import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "10px", 
      borderRadius: "8px",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      width: "200px"
    }}>
      {children}
    </div>
  );
};

export default Card;