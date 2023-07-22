import React from 'react';
import { Circle } from '@react-three/drei';

const Circles = () => {
  return (
    <group>
    {[7,
3,
5,
10,
13,
16,
21,
26].map(circle=>
        <mesh key={circle} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]} >
        <torusGeometry args={[circle, .05, 16, 100]} />
        <meshStandardMaterial color={[0,0,0]} emissive={[.5, .5, .5]} />
        </mesh>
        )}
    
    </group>
    
  );
};

export default Circles;
