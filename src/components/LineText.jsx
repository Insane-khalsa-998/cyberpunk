import React from 'react';
import './LineText.css';

const LineText = ({ text, className }) => {
  // Split text by line breaks or periods
  const lines = text.split(/[.\n]/).filter(line => line.trim() !== '');
  
  return (
    <p className={`line-text ${className || ''}`}>
      {lines.map((line, index) => (
        <span 
          key={index} 
          className="line-item"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          {line.trim()}{index < lines.length - 1 ? '.' : ''}
        </span>
      ))}
    </p>
  );
};

export default LineText;