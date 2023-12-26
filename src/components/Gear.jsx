import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Gear(props) {
  const { nodes } = useGLTF('/3gear.glb');

  // Refs for each gear mesh
  const bigGearRef = useRef();
  const mediumGearRef = useRef();
  const smallGearRef = useRef();

  // Update function for rotation
  useFrame(() => {
    // Assuming big gear rotates at a constant speed
    const bigGearSpeed = 0.001; // adjust this speed as needed

    // Calculate gear rotation speeds based on gear ratios
    const mediumGearSpeed = bigGearSpeed * (46 / 20); // Big gear to medium gear ratio
    const smallGearSpeed = mediumGearSpeed * (20 / 8); // Medium gear to small gear ratio

    // Update rotations
    if (bigGearRef.current) {
      bigGearRef.current.rotation.y += bigGearSpeed;
    }
    if (mediumGearRef.current) {
      mediumGearRef.current.rotation.y -= mediumGearSpeed; // rotate in opposite direction
    }
    if (smallGearRef.current) {
      smallGearRef.current.rotation.y += smallGearSpeed; // rotate in the same direction as big gear
    }
  });

  return (
    <group {...props} dispose={null} position={[0, 0, 50]}>
      <mesh
        ref={bigGearRef}
        castShadow
        receiveShadow
        geometry={nodes.big.geometry}
        material={nodes.big.material}
        position={[0, 0, -146.255]}
      />
      <mesh
        ref={mediumGearRef}
        castShadow
        receiveShadow
        geometry={nodes.medium.geometry}
        material={nodes.medium.material}
        position={[0, 0, -44.519]}
      />
      <mesh
        ref={smallGearRef}
        castShadow
        receiveShadow
        geometry={nodes.small.geometry}
        material={nodes.small.material}
      />
    </group>
  );
}

useGLTF.preload('/3gear.glb');
