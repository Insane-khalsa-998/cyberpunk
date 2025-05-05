import React from 'react';
import './SplitText.css';

const SplitText = ({ text, className }) => {
  return (
    <h1 className={`split-text ${className || ''}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="split-char"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default SplitText;