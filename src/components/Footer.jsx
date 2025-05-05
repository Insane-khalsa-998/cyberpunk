import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [uptime, setUptime] = useState(0);
    
    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
            setUptime(prev => prev + 1);
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);
    
    // Format uptime to display as days:hours:minutes:seconds
    const formatUptime = (seconds) => {
        const days = Math.floor(seconds / (24 * 3600));
        const hours = Math.floor((seconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        
        return `${days}d:${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m:${secs.toString().padStart(2, '0')}s`;
    };
    
    // Generate random IP address
    const generateIP = () => {
        return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    };
    
    // Generate random port number
    const generatePort = () => {
        return Math.floor(Math.random() * 65535);
    };
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="system-status">
                    <div className="status-group">
                        <div className="status-item">
                            <span className="status-label">SYSTEM:</span>
                            <span className="status-value online">ONLINE</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">UPTIME:</span>
                            <span className="status-value">{formatUptime(uptime)}</span>
                        </div>
                    </div>
                    
                    <div className="status-group">
                        <div className="status-item">
                            <span className="status-label">IP:</span>
                            <span className="status-value">{generateIP()}</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">PORT:</span>
                            <span className="status-value">{generatePort()}</span>
                        </div>
                    </div>
                    
                    <div className="status-group">
                        <div className="status-item">
                            <span className="status-label">FIREWALL:</span>
                            <span className="status-value active">ACTIVE</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">THREATS:</span>
                            <span className="status-value">0</span>
                        </div>
                    </div>
                    
                    <div className="status-group">
                        <div className="status-item">
                            <span className="status-label">DATE:</span>
                            <span className="status-value">{currentTime.toLocaleDateString()}</span>
                        </div>
                        <div className="status-item">
                            <span className="status-label">TIME:</span>
                            <span className="status-value">{currentTime.toLocaleTimeString()}</span>
                        </div>
                    </div>
                </div>
                
                <div className="footer-divider"></div>
                
                <div className="footer-info">
                    <div className="copyright">
                        &copy; {currentTime.getFullYear()} MANPREET SINGH | ALL RIGHTS RESERVED
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-link">GITHUB</a>
                        <a href="#" className="social-link">LINKEDIN</a>
                        <a href="#" className="social-link">TWITTER</a>
                    </div>
                </div>
            </div>
            
            <div className="matrix-rain" id="matrix-canvas"></div>
        </footer>
    );
};

export default Footer;