// src/components/GlitchText.jsx
import React from 'react';
import './GlitchText.css';

const GlitchText = ({ text }) => (
    <h2 className="glitch" data-text={text}>
        {text}
    </h2>
);

export default GlitchText;
