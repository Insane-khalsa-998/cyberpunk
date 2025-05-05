import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [canScroll, setCanScroll] = useState(true);
    const sections = [Hero, Projects, Skills, Education, Contact, Footer];
    const appRef = useRef(null);

    // Handle wheel events for section navigation
    useEffect(() => {
        const handleWheel = (e) => {
            if (!canScroll) return;

            setCanScroll(false);
            setTimeout(() => setCanScroll(true), 1000); // Debounce scrolling

            if (e.deltaY > 0 && currentSection < sections.length - 1) {
                // Scroll down
                setCurrentSection(prev => prev + 1);
            } else if (e.deltaY < 0 && currentSection > 0) {
                // Scroll up
                setCurrentSection(prev => prev - 1);
            }
        };

        const appContainer = appRef.current;
        if (appContainer) {
            appContainer.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (appContainer) {
                appContainer.removeEventListener('wheel', handleWheel);
            }
        };
    }, [currentSection, canScroll, sections.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!canScroll) return;

            setCanScroll(false);
            setTimeout(() => setCanScroll(true), 1000); // Debounce navigation

            if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSection < sections.length - 1) {
                setCurrentSection(prev => prev + 1);
            } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
                setCurrentSection(prev => prev - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSection, canScroll, sections.length]);

    // Navigation dots
    const renderNavigationDots = () => {
        return (
            <div className="section-navigation">
                {sections.map((_, index) => (
                    <div 
                        key={index}
                        className={`nav-dot ${index === currentSection ? 'active' : ''}`}
                        onClick={() => setCurrentSection(index)}
                    />
                ))}
            </div>
        );
    };

    const CurrentSection = sections[currentSection];

    return (
        <div className="app-container" ref={appRef}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSection}
                    className="section-container"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <CurrentSection />
                </motion.div>
            </AnimatePresence>
            {renderNavigationDots()}
        </div>
    );
};

export default App;
