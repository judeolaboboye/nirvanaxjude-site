import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleRing = () => {
    const pointsRef = useRef();

    // Generate circular particle ring with random noise
    const particlesPosition = React.useMemo(() => {
        const count = 1500;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const r = 4 + Math.random() * 2; // Radius between 4 and 6
            const x = Math.cos(angle) * r;
            const z = Math.sin(angle) * r;
            const y = (Math.random() - 0.5) * 1.5; // Slight vertical spread
            
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.1; // Slow rotation
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1; // Gentle wobble
        }
    });

    return (
        <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#C9A84C"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

const RadarSweep = () => {
    const meshRef = useRef();
    
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 1.5; // Fast sweep
        }
    });

    return (
        <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[5, 64]} />
            <meshBasicMaterial 
                color="#C9A84C" 
                transparent 
                opacity={0.05} 
                side={THREE.DoubleSide}
                depthWrite={false}
            />
        </mesh>
    );
};

const TargetingRadar = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <ParticleRing />
                <RadarSweep />
            </Canvas>
        </div>
    );
};

export default TargetingRadar;
