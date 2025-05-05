import React, { useState } from 'react';
import Terminal from './Terminal';
import './Projects.css';

const ProjectCard = ({ project, onSelect }) => {
    return (
        <div className="project-card" onClick={() => onSelect(project)}>
            <div className="project-card-inner">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
                <p className="project-description">{project.shortDescription}</p>
                <button className="decrypt-button">DECRYPT</button>
            </div>
        </div>
    );
};

const ProjectDetail = ({ project, onClose }) => {
    if (!project) return null;
    
    return (
        <div className="project-detail-overlay">
            <div className="project-detail-container">
                <div className="project-detail-header">
                    <h2>{project.title}</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="project-detail-content">
                    <div className="project-detail-tags">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="project-tag">{tag}</span>
                        ))}
                    </div>
                    <div className="project-detail-description">
                        <p>{project.fullDescription}</p>
                    </div>
                    <div className="project-detail-links">
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                LIVE DEMO
                            </a>
                        )}
                        {project.codeLink && (
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                VIEW CODE
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    
    // Sample project data
    const projects = [
        {
            id: 1,
            title: "Neural Network Firewall",
            tags: ["Python", "TensorFlow", "Cybersecurity"],
            shortDescription: "Advanced firewall system using neural networks to detect and prevent intrusions.",
            fullDescription: "An advanced firewall system that uses neural networks to detect and prevent intrusions. The system analyzes network traffic patterns and identifies potential threats in real-time. It employs deep learning algorithms to adapt to new attack vectors and improve detection accuracy over time.",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Quantum Encryption Tool",
            tags: ["JavaScript", "React", "Cryptography"],
            shortDescription: "End-to-end encryption tool with quantum-resistant algorithms.",
            fullDescription: "A cutting-edge encryption tool that implements quantum-resistant algorithms to secure communications against future quantum computing attacks. The application provides a user-friendly interface for encrypting messages, files, and data with military-grade security protocols.",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 3,
            title: "Augmented Reality HUD",
            tags: ["React Native", "AR.js", "Three.js"],
            shortDescription: "Heads-up display for augmented reality applications with cyberpunk aesthetics.",
            fullDescription: "A heads-up display (HUD) framework for augmented reality applications with a cyberpunk aesthetic. The system overlays digital information onto the real world, providing users with contextual data and interactive elements. The HUD features customizable widgets, real-time data visualization, and gesture-based controls.",
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Biometric Authentication System",
            tags: ["Node.js", "Express", "MongoDB"],
            shortDescription: "Multi-factor authentication system using biometric data and behavioral analysis.",
            fullDescription: "A sophisticated authentication system that combines biometric data with behavioral analysis to provide secure access control. The system uses facial recognition, fingerprint scanning, and typing pattern analysis to verify user identity. It includes anti-spoofing measures and continuous authentication to maintain security throughout user sessions.",
            demoLink: "#",
            codeLink: "#"
        }
    ];
    
    const handleSelectProject = (project) => {
        setSelectedProject(project);
    };
    
    const handleCloseDetail = () => {
        setSelectedProject(null);
    };
    
    return (
        <section className="projects-section">
            <Terminal title="/etc/projects">
                <div className="terminal-section">
                    <div className="terminal-label">// HACKING CONTRACTS</div>
                    <div className="projects-grid">
                        {projects.map(project => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onSelect={handleSelectProject} 
                            />
                        ))}
                    </div>
                </div>
            </Terminal>
            
            <ProjectDetail 
                project={selectedProject} 
                onClose={handleCloseDetail} 
            />
        </section>
    );
};

export default Projects;