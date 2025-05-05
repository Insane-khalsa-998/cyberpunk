import React from 'react';
import Terminal from './Terminal';
import './Education.css';

const EducationEntry = ({ entry }) => {
    return (
        <div className="education-entry">
            <div className="education-date">
                <span className="date-indicator"></span>
                <span className="date-text">{entry.date}</span>
            </div>
            <div className="education-content">
                <div className="education-header">
                    <span className="boot-prompt">> LOADED:</span>
                    <h3 className="education-title">{entry.title}</h3>
                </div>
                <div className="education-institution">{entry.institution}</div>
                <div className="education-modules">
                    {entry.modules.map((module, index) => (
                        <div key={index} className="education-module">
                            <span className="module-prompt">> Loaded:</span>
                            <span className="module-name">{module}</span>
                            <span className="module-status">OK</span>
                        </div>
                    ))}
                </div>
                {entry.achievements && (
                    <div className="education-achievements">
                        <div className="achievements-header">
                            <span className="achievements-prompt">> Achievements:</span>
                        </div>
                        <ul className="achievements-list">
                            {entry.achievements.map((achievement, index) => (
                                <li key={index} className="achievement-item">
                                    <span className="achievement-bullet">■</span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

const Education = () => {
    // Sample education data
    const educationData = [
        {
            date: "2018 - 2022",
            title: "B.S. Computer Science & Cybersecurity",
            institution: "CYBER INSTITUTE OF TECHNOLOGY",
            modules: [
                "Advanced Network Security",
                "Ethical Hacking Methodologies",
                "Full-Stack Development",
                "Artificial Intelligence"
            ],
            achievements: [
                "Graduated with Honors (3.9 GPA)",
                "Led CTF team to national finals",
                "Published research on quantum encryption"
            ]
        },
        {
            date: "2016 - 2018",
            title: "Associate's Degree in Computer Science",
            institution: "NIGHT CITY COMMUNITY COLLEGE",
            modules: [
                "Programming Fundamentals",
                "Web Development",
                "Database Systems",
                "Computer Architecture"
            ],
            achievements: [
                "Dean's List all semesters",
                "Developed campus security monitoring system",
                "Teaching assistant for Programming 101"
            ]
        },
        {
            date: "2023",
            title: "Advanced Penetration Testing Certification",
            institution: "NETRUNNER SECURITY ACADEMY",
            modules: [
                "Exploit Development",
                "Web Application Security",
                "Wireless Network Penetration",
                "Social Engineering"
            ]
        },
        {
            date: "2022",
            title: "Full-Stack Development Bootcamp",
            institution: "ARASAKA TECH INSTITUTE",
            modules: [
                "React & Redux",
                "Node.js & Express",
                "MongoDB",
                "RESTful API Design"
            ],
            achievements: [
                "Built e-commerce platform with secure payment processing",
                "Awarded 'Best Project' for cybersecurity dashboard"
            ]
        }
    ];
    
    return (
        <section className="education-section">
            <Terminal title="/boot/education">
                <div className="terminal-section">
                    <div className="terminal-label">// SYSTEM BOOT LOGS</div>
                    <div className="boot-sequence">
                        <div className="boot-header">
                            <span className="boot-prompt">> INITIALIZING EDUCATION RECORDS...</span>
                            <span className="boot-status">COMPLETE</span>
                        </div>
                        <div className="boot-time">
                            <span className="time-label">Boot Time:</span>
                            <span className="time-value">{new Date().toLocaleTimeString()}</span>
                        </div>
                        <div className="education-timeline">
                            {educationData.map((entry, index) => (
                                <EducationEntry key={index} entry={entry} />
                            ))}
                        </div>
                        <div className="boot-footer">
                            <span className="boot-prompt">> EDUCATION SEQUENCE LOADED SUCCESSFULLY</span>
                            <span className="memory-usage">MEM USAGE: 1.2GB/4GB</span>
                        </div>
                    </div>
                </div>
            </Terminal>
        </section>
    );
};

export default Education;