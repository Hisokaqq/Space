import { Line, PerspectiveCamera } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import * as THREE from 'three';

const ScrollingCamera = () => {
  const curve = useMemo(() => {
    const radius = 30;
    const segments = 100; // Number of points to approximate the circle
    const points = [];

    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      points.push(new THREE.Vector3(x, 0, z));
    }

    // Close the loop by adding the first point again at the end
    points.push(points[0]);

    return new THREE.CatmullRomCurve3(points, true);
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(100);
  }, [curve]);


  const position= new THREE.Vector3(16.14, 8.32, 19.81);
  const lookAt = new THREE.Vector3(0, 0, 0);
  const cameraRef = useRef()
  return (
  <group>
    <Line points={linePoints} color="white" opacity={1} position={[16.14, 8.32, 19.81]} />

    <PerspectiveCamera
        ref={cameraRef} 
        makeDefault
        position={[16.14, 8.32, 19.81]}
        fov={90}
        near={0.1}
        far={1000}
    />
  </group>
  )
};

export default ScrollingCamera;
