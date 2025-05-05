import React, { useState } from 'react';
import Terminal from './Terminal';
import './Skills.css';

const SkillBar = ({ skill, category }) => {
    const [showPopup, setShowPopup] = useState(false);
    
    // Determine color based on category
    const getCategoryColor = (category) => {
        switch(category) {
            case 'Frontend':
                return '#00ffff'; // Cyan
            case 'Backend':
                return '#ff00ff'; // Magenta
            case 'Cybersecurity':
                return '#ffff00'; // Yellow
            case 'Tools':
                return '#00ff00'; // Green
            default:
                return '#00ffff';
        }
    };
    
    const color = getCategoryColor(category);
    
    return (
        <div 
            className="skill-bar-container"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
        >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-wrapper">
                <div 
                    className="skill-bar" 
                    style={{ 
                        height: `${skill.level}%`,
                        backgroundColor: color
                    }}
                >
                    <div className="skill-percentage">{skill.level}%</div>
                </div>
            </div>
            
            {showPopup && (
                <div className="skill-popup">
                    <div className="skill-popup-header">
                        <span className="skill-popup-name">{skill.name}</span>
                        <span className="skill-popup-level">{skill.level}%</span>
                    </div>
                    <div className="skill-popup-description">{skill.description}</div>
                    {skill.projects && (
                        <div className="skill-popup-projects">
                            <div className="skill-popup-label">RELATED PROJECTS:</div>
                            <ul>
                                {skill.projects.map((project, index) => (
                                    <li key={index}>{project}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const SkillCategory = ({ category, skills }) => {
    return (
        <div className="skill-category">
            <div className="skill-category-header">
                <div className="skill-category-name">{category}</div>
                <div className="skill-category-bar"></div>
            </div>
            <div className="skill-bars">
                {skills.map((skill, index) => (
                    <SkillBar 
                        key={index} 
                        skill={skill} 
                        category={category} 
                    />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    // Sample skills data
    const skillsData = {
        Frontend: [
            {
                name: "React",
                level: 90,
                description: "Advanced proficiency in React, including hooks, context API, and Redux for state management.",
                projects: ["Cyberpunk Portfolio", "Neural Network Visualizer"]
            },
            {
                name: "Three.js",
                level: 75,
                description: "Experience with 3D graphics programming using Three.js for interactive web experiences.",
                projects: ["Augmented Reality HUD", "Virtual Cityscape"]
            },
            {
                name: "CSS/SASS",
                level: 85,
                description: "Expert in creating responsive, animated interfaces with modern CSS techniques.",
                projects: ["Cyberpunk UI Kit", "Neon Dashboard"]
            },
            {
                name: "JavaScript",
                level: 95,
                description: "Extensive knowledge of modern JavaScript (ES6+) and TypeScript.",
                projects: ["Quantum Encryption Tool", "Neural Network Firewall"]
            }
        ],
        Backend: [
            {
                name: "Node.js",
                level: 80,
                description: "Proficient in building scalable server-side applications with Node.js and Express.",
                projects: ["Secure API Gateway", "Real-time Chat System"]
            },
            {
                name: "Python",
                level: 85,
                description: "Strong skills in Python for backend development, data analysis, and automation.",
                projects: ["Neural Network Firewall", "Data Scraping Tool"]
            },
            {
                name: "MongoDB",
                level: 70,
                description: "Experience with NoSQL database design, optimization, and security.",
                projects: ["User Authentication System", "Content Management System"]
            },
            {
                name: "GraphQL",
                level: 65,
                description: "Knowledge of GraphQL API design and implementation with Apollo Server.",
                projects: ["Data Visualization Dashboard", "E-commerce Platform"]
            }
        ],
        Cybersecurity: [
            {
                name: "Penetration Testing",
                level: 80,
                description: "Skilled in identifying and exploiting security vulnerabilities in web applications.",
                projects: ["Security Audit Tool", "Vulnerability Scanner"]
            },
            {
                name: "Cryptography",
                level: 75,
                description: "Understanding of encryption algorithms, hashing, and secure communication protocols.",
                projects: ["Quantum Encryption Tool", "Secure Messaging App"]
            },
            {
                name: "Network Security",
                level: 70,
                description: "Experience with firewall configuration, intrusion detection, and network monitoring.",
                projects: ["Neural Network Firewall", "Traffic Analysis Tool"]
            },
            {
                name: "Ethical Hacking",
                level: 85,
                description: "Proficient in CTF competitions and ethical hacking methodologies.",
                projects: ["Capture The Flag Platform", "Security Training Simulator"]
            }
        ],
        Tools: [
            {
                name: "Git/GitHub",
                level: 90,
                description: "Advanced version control skills, including CI/CD pipeline integration.",
                projects: ["Automated Deployment System", "Code Review Tool"]
            },
            {
                name: "Docker",
                level: 75,
                description: "Experience with containerization and orchestration for scalable applications.",
                projects: ["Microservices Architecture", "Development Environment Setup"]
            },
            {
                name: "VS Code",
                level: 95,
                description: "Expert in customizing and extending VS Code for optimal development workflow.",
                projects: ["Custom Extension Development", "Productivity Toolkit"]
            },
            {
                name: "Figma",
                level: 70,
                description: "Proficient in UI/UX design and prototyping with Figma.",
                projects: ["Cyberpunk UI Kit", "Mobile App Design"]
            }
        ]
    };
    
    return (
        <section className="skills-section">
            <Terminal title="/root/skills">
                <div className="terminal-section">
                    <div className="terminal-label">// SYSTEM CAPABILITIES</div>
                    <div className="skills-dashboard">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <SkillCategory 
                                key={category} 
                                category={category} 
                                skills={skills} 
                            />
                        ))}
                    </div>
                </div>
            </Terminal>
        </section>
    );
};

export default Skills;