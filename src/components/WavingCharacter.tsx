import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const WavingCharacter = () => {
  const characterRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (characterRef.current) {
      characterRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.3 + 0.3;
    }
  });

  return (
    <group ref={characterRef} position={[0, -1, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#4F46E5" />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6]} />
        <meshStandardMaterial color="#F59E0B" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.2, 1.3, 0.5]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.2, 1.3, 0.5]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Mouth */}
      <mesh position={[0, 1.1, 0.5]}>
        <boxGeometry args={[0.3, 0.05, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Left Arm (static) */}
      <mesh position={[-0.8, 0.2, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#F59E0B" />
      </mesh>
      
      {/* Right Arm (waving) */}
      <group ref={armRef} position={[0.8, 0.5, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.3, 1, 0.3]} />
          <meshStandardMaterial color="#F59E0B" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.8, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#F59E0B" />
        </mesh>
      </group>
      
      {/* Legs */}
      <mesh position={[-0.3, -1.3, 0]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#1E40AF" />
      </mesh>
      <mesh position={[0.3, -1.3, 0]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#1E40AF" />
      </mesh>
    </group>
  );
};