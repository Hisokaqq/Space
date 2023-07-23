import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { easing } from "maath"

function Rig({ givenRef }) {
  const previousMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const deltaX = clientX - previousMouse.current.x;
      const deltaY = clientY - previousMouse.current.y;
      givenRef.current.position.x += deltaX * 0.001; // Reduce the scaling factor to make the movement smaller
      givenRef.current.position.y -= deltaY * 0.001; // minus because the y-axis is inverted in Three.js
      previousMouse.current.x = clientX;
      previousMouse.current.y = clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [givenRef]);

  return useFrame((state, delta) => {
    easing.damp3(givenRef.current.position, [1 + givenRef.current.position.x / 4, 1.5 + givenRef.current.position.y / 4, 2.5], 1.2, delta);
  });
}

export default Rig;
