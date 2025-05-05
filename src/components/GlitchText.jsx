// src/components/GlitchText.jsx
import React from 'react';
import './GlitchText.css';

const GlitchText = ({ text }) => {
    const words = text.split(' ');

    return (
        <h2 className="glitch-container">
            {words.map((word, index) => (
                <span 
                    key={index} 
                    className="glitch-word"
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                    <span className="glitch" data-text={word}>
                        {word}
                    </span>
                    {index < words.length - 1 ? ' ' : ''}
                </span>
            ))}
        </h2>
    );
};

export default GlitchText;
