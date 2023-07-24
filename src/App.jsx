import { OrbitControls, PerspectiveCamera, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './Experience';
import {  useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import useTransition from './helpers/ValueTransition';
import AnimatedStars from './components/AnimatedStars';
import CanvasHtml from './components/CanvasHtml';
import Rig from './components/Rig';

function App() {
  const [open, setOpen] = useState(false);
  
  const x = useTransition(open, open ? 10 : 0, 450); 
  const y = useTransition(open, open ? 5 : 0, 450); 
  const z = useTransition(open, open ? -5 : 0, 450); 
  const xCamera = useTransition(open, open ? 16.14 : -2, 450); 
  const planetsRef = useRef()

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
            enableZoom={false}
          />
          
          <color attach='background' args={['#171720']} />

          <group position={[x, y, z]}>
            <AnimatedStars />
            <ScrollControls pages={3.6} damping={.2}  >
                <group ref={planetsRef} >
                  <Experience setOpen={setOpen}/>
                </group>
              <CanvasHtml open={open}  />
            </ScrollControls>
          </group>
          <Rig givenRef={planetsRef} />
        </Canvas>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
