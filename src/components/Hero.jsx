// src/components/Hero.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, PerspectiveCamera } from '@react-three/drei';
import { Vector3 } from 'three';
import GlitchText from './GlitchText';
import SplitText from './SplitText';
import LineText from './LineText';
import Terminal from './Terminal';
import './Hero.css';

// Vanta.js rings effect component
const VantaRings = () => {
    const vantaRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update isMobile state when window is resized
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Initialize Vanta effect
        if (!vantaRef.current) return;

        const vantaEffect = window.VANTA.RINGS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: isMobile ? 0.75 : 1.00,
            scaleMobile: 0.75,
            color: 0x00ffff,
            backgroundColor: 0x000000,
            backgroundAlpha: 0,
            // Reduce complexity on mobile
            segments: isMobile ? 50 : 100,
            maxDistance: isMobile ? 15 : 25,
            speed: isMobile ? 1 : 2
        });

        // Cleanup function
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [isMobile]); // Re-initialize when isMobile changes

    return <div ref={vantaRef} className="vanta-container"></div>;
};

// Background component that reacts to mouse movement
const CyberpunkBackground = () => {
    const gridRef = useRef();
    const { mouse, viewport } = useThree();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update isMobile state when window is resized
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useFrame(() => {
        if (gridRef.current) {
            // Subtle rotation based on mouse position
            // Reduce rotation on mobile for better performance
            const rotationFactor = isMobile ? 0.05 : 0.1;
            gridRef.current.rotation.x = mouse.y * rotationFactor;
            gridRef.current.rotation.y = mouse.x * rotationFactor;
        }
    });

    // Determine grid and particle density based on device
    const gridSize = isMobile ? 10 : 20;
    const particleCount = isMobile ? 20 : 50;

    return (
        <group ref={gridRef}>
            {/* Create a grid of lines for the cyberpunk effect */}
            {Array.from({ length: gridSize }).map((_, i) => (
                <React.Fragment key={`grid-x-${i}`}>
                    <line>
                        <bufferGeometry attach="geometry" args={[new Float32Array([
                            -10, 0, (i * 20 / gridSize) - 10,
                            10, 0, (i * 20 / gridSize) - 10
                        ]), 3]} />
                        <lineBasicMaterial attach="material" color="#ff0055" opacity={0.2} transparent={true} />
                    </line>
                    <line>
                        <bufferGeometry attach="geometry" args={[new Float32Array([
                            (i * 20 / gridSize) - 10, 0, -10,
                            (i * 20 / gridSize) - 10, 0, 10
                        ]), 3]} />
                        <lineBasicMaterial attach="material" color="#00ffff" opacity={0.2} transparent={true} />
                    </line>
                </React.Fragment>
            ))}

            {/* Add some floating particles */}
            {Array.from({ length: particleCount }).map((_, i) => {
                const x = (Math.random() - 0.5) * 20;
                const y = (Math.random() - 0.5) * 20;
                const z = (Math.random() - 0.5) * 20;
                return (
                    <mesh key={`particle-${i}`} position={[x, y, z]}>
                        <sphereGeometry args={[0.05, isMobile ? 4 : 8, isMobile ? 4 : 8]} />
                        <meshBasicMaterial color={i % 2 === 0 ? "#ff0055" : "#00ffff"} />
                    </mesh>
                );
            })}
        </group>
    );
};

// Camera that moves slightly with mouse
const MovingCamera = () => {
    const cameraRef = useRef();
    const { mouse } = useThree();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update isMobile state when window is resized
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useFrame(() => {
        if (cameraRef.current) {
            // Reduce movement on mobile for better performance
            const movementFactor = isMobile ? 1 : 2;
            cameraRef.current.position.x = mouse.x * movementFactor;
            cameraRef.current.position.y = mouse.y * movementFactor;
            cameraRef.current.lookAt(new Vector3(0, 0, 0));
        }
    });

    return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} />;
};

const Hero = () => {
    return (
        <div className="hero-container">
            {/* Vanta.js Rings Effect */}
            <VantaRings />

            {/* 3D Background */}
            <Canvas className="hero-canvas">
                <MovingCamera />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <CyberpunkBackground />
            </Canvas>

            {/* Terminal with all text content */}
            <div className="terminal-wrapper">
                <Terminal title="CYBERPUNK IDENTITY SYSTEM">
                    <div className="terminal-section identity">
                        <SplitText text="MANPREET" className="name-text" />
                        <SplitText text="SINGH" className="name-text" />
                    </div>

                    <div className="terminal-section skills">
                        <div className="terminal-label">// SKILLS</div>
                        <GlitchText text="Cybersecurity | Front-end Dev | Back-end Dev" />
                    </div>

                    <div className="terminal-section bio">
                        <div className="terminal-label">// PROFILE</div>
                        <LineText 
                            text="Passionate cybersecurity enthusiast with hands-on experience in ethical hacking. CTFs, and full-stack dev. Skilled in Python, React, Node.js."
                            className="hero-summary"
                        />
                    </div>

                    <div className="terminal-command-line">
                        <span className="terminal-prompt">></span>
                        <span className="terminal-command">run cyberpunk_portfolio.exe --mode=interactive</span>
                    </div>
                </Terminal>
            </div>
        </div>
    );
};

export default Hero;
