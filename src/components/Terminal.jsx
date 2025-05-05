// src/components/Terminal.jsx
import React, { useState, useEffect } from 'react';
import './Terminal.css';

const Terminal = ({ children, title = "CYBERPUNK TERMINAL" }) => {
    // Check if boot sequence has already played during this session
    const hasBooted = sessionStorage.getItem('terminalBooted') === 'true';
    const [isBooting, setIsBooting] = useState(!hasBooted);
    const [bootProgress, setBootProgress] = useState(0);

    // Simulate boot sequence only if it hasn't played yet
    useEffect(() => {
        // Skip boot sequence if it has already played
        if (hasBooted) {
            return;
        }

        const bootInterval = setInterval(() => {
            setBootProgress(prev => {
                if (prev >= 100) {
                    clearInterval(bootInterval);
                    setTimeout(() => {
                        setIsBooting(false);
                        // Mark boot sequence as played
                        sessionStorage.setItem('terminalBooted', 'true');
                    }, 500);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);

        return () => clearInterval(bootInterval);
    }, [hasBooted]);

    return (
        <div className="terminal-container">
            {/* Terminal header */}
            <div className="terminal-header">
                <div className="terminal-controls">
                    <span className="terminal-control close"></span>
                    <span className="terminal-control minimize"></span>
                    <span className="terminal-control maximize"></span>
                </div>
                <div className="terminal-title">{title}</div>
                <div className="terminal-status">
                    <span className="terminal-status-indicator"></span>
                    {isBooting ? "BOOTING..." : "CONNECTED"}
                </div>
            </div>

            {/* Boot sequence */}
            {isBooting && (
                <div className="terminal-boot">
                    <div className="terminal-boot-text">
                        <p>INITIALIZING SYSTEM...</p>
                        <p>LOADING NEURAL INTERFACE...</p>
                        <p>CONNECTING TO NETWORK...</p>
                        <p>BYPASSING SECURITY PROTOCOLS...</p>
                        <p>SYSTEM BOOT: {bootProgress}%</p>
                    </div>
                    <div className="terminal-progress-bar">
                        <div 
                            className="terminal-progress-fill" 
                            style={{ width: `${bootProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Terminal content */}
            <div className={`terminal-content ${isBooting ? 'hidden' : 'visible'}`}>
                {children}
                <div className="terminal-cursor"></div>
            </div>

            {/* Terminal footer */}
            <div className="terminal-footer">
                <div className="terminal-stats">
                    <span>CPU: 42%</span>
                    <span>MEM: 1.2GB</span>
                    <span>NET: 128MB/s</span>
                </div>
                <div className="terminal-time">
                    {new Date().toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
};

export default Terminal;
