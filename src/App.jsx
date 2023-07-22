import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './Experience';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import useTransition from './helpers/ValueTransition';
import AnimatedStars from './components/AnimatedStars';
import CameraPosLogging from './helpers/CameraPosLogging';
function App() {
  const [open, setOpen] = useState(false);

  const x = useTransition(open, open ? 10 : 0, 450); 
  const y = useTransition(open, open ? 5 : 0, 450); 
  const z = useTransition(open, open ? -5 : 0, 450); 

  const xCamera = useTransition(open, open ? 16.14 : -2, 450); 


  return (
    <div className='app' >
      <div className='canvas'>
        <Canvas shadows>
          <PerspectiveCamera
            makeDefault
            position={[xCamera, 8.32, 19.81]}
            fov={90}
            near={0.1}
            far={1000}
          />
          <OrbitControls
            maxPolarAngle={Math.PI / 3}
            maxDistance={25}
            enablePan={false}
            minDistance={10}
            enableRotate={false}
            enableZoom={!open}
          />
          
          <color attach='background' args={['#171720']} />

          <group position={[x, y, z]}>
          <CameraPosLogging event={'mousedown'} />
        <AnimatedStars />
            <Experience setOpen={setOpen}/>

          </group>
        </Canvas>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
