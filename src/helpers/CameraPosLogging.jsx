import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';

const CameraPosLogging = ({ event }) => {
  const { camera } = useThree();
  const cameraRef = useRef();

  useEffect(() => {
    const logCameraPos = () => {
      const [x, y, z] = cameraRef.current.position.toArray();
      const roundX = Math.round(x * 100) / 100;
      const roundY = Math.round(y * 100) / 100;
      const roundZ = Math.round(z * 100) / 100;
      console.log(` camera position: ${roundX}, ${roundY}, ${roundZ}`);
    };

    cameraRef.current = camera;
    window.addEventListener(event, logCameraPos);

    return () => {
      window.removeEventListener(event, logCameraPos);
    };
  }, [event]);

  return null;
};

export default CameraPosLogging;
