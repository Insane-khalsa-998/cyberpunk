import React, { useState } from 'react';
import Terminal from './Terminal';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        sending: false,
        error: null
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: false,
                sending: false,
                error: 'All fields are required.'
            });
            return;
        }
        
        // Simulate form submission
        setFormStatus({
            submitted: false,
            sending: true,
            error: null
        });
        
        // Simulate API call with timeout
        setTimeout(() => {
            setFormStatus({
                submitted: true,
                sending: false,
                error: null
            });
            
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus({
                    submitted: false,
                    sending: false,
                    error: null
                });
            }, 5000);
        }, 2000);
    };
    
    return (
        <section className="contact-section">
            <Terminal title="/usr/bin/contact">
                <div className="terminal-section">
                    <div className="terminal-label">// SECURE COMMUNICATION CHANNEL</div>
                    
                    <div className="contact-container">
                        {!formStatus.submitted && !formStatus.sending && (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">
                                        <span className="input-prompt">> ENTER NAME:</span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input"
                                            autoComplete="off"
                                        />
                                    </label>
                                </div>
                                
                                <div className="form-group">
                                    <label className="form-label">
                                        <span className="input-prompt">> ENTER EMAIL:</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input"
                                            autoComplete="off"
                                        />
                                    </label>
                                </div>
                                
                                <div className="form-group">
                                    <label className="form-label">
                                        <span className="input-prompt">> ENTER MESSAGE:</span>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-textarea"
                                            rows="5"
                                        ></textarea>
                                    </label>
                                </div>
                                
                                {formStatus.error && (
                                    <div className="form-error">
                                        <span className="error-prompt">> ERROR:</span>
                                        <span className="error-message">{formStatus.error}</span>
                                    </div>
                                )}
                                
                                <div className="form-submit">
                                    <button type="submit" className="submit-button">
                                        INITIATE TRANSMISSION
                                    </button>
                                </div>
                                
                                <div className="form-note">
                                    <span className="note-prompt">> NOTE:</span>
                                    <span className="note-text">All communications are encrypted with quantum-resistant algorithms.</span>
                                </div>
                            </form>
                        )}
                        
                        {formStatus.sending && (
                            <div className="sending-container">
                                <div className="sending-animation">
                                    <div className="sending-pulse"></div>
                                </div>
                                <div className="sending-text">
                                    <span className="sending-prompt">> TRANSMITTING DATA...</span>
                                    <div className="sending-progress">
                                        <div className="progress-bar">
                                            <div className="progress-fill"></div>
                                        </div>
                                        <div className="progress-percentage">0%</div>
                                    </div>
                                    <div className="sending-details">
                                        <div className="detail-item">
                                            <span className="detail-label">ENCRYPTING:</span>
                                            <span className="detail-value">COMPLETE</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">ROUTING:</span>
                                            <span className="detail-value">IN PROGRESS</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">DELIVERY:</span>
                                            <span className="detail-value">PENDING</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {formStatus.submitted && (
                            <div className="success-container">
                                <div className="success-icon"></div>
                                <div className="success-message">
                                    <span className="success-prompt">>> SIGNAL RECEIVED</span>
                                    <p className="success-text">Your message has been successfully transmitted. Expect a response within 48 hours.</p>
                                </div>
                                <div className="success-details">
                                    <div className="detail-item">
                                        <span className="detail-label">TIMESTAMP:</span>
                                        <span className="detail-value">{new Date().toLocaleString()}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">STATUS:</span>
                                        <span className="detail-value success">DELIVERED</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">ENCRYPTION:</span>
                                        <span className="detail-value">AES-256</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="contact-footer">
                        <div className="connection-status">
                            <span className="status-indicator"></span>
                            <span className="status-text">SECURE CONNECTION</span>
                        </div>
                        <div className="connection-details">
                            <span className="detail-item">PORT: 443</span>
                            <span className="detail-item">PROTOCOL: HTTPS</span>
                            <span className="detail-item">PING: 42ms</span>
                        </div>
                    </div>
                </div>
            </Terminal>
        </section>
    );
};

export default Contact;