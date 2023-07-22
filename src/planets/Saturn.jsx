import React, { useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import usePlanetStore from '../helpers/SelectedPlanetStore'

const Saturn =  React.memo(({ distance, speed, axisSpeed, size, name, setOpen}) => {

const [SaturnTexture, RingTexture] = useTexture(['./textures/saturn.jpg', './textures/saturn_ring.png']) // [0] is the Saturn texture, [1] is the Saturn texture
RingTexture.rotation = Math.PI * .5
const SaturnRef = React.useRef()
const updateSaturnPos = React.useCallback( (clock)=>{
  SaturnRef.current.position.x = Math.sin(clock.getElapsedTime() * speed) * distance
  SaturnRef.current.position.z = Math.cos(clock.getElapsedTime() * speed) * distance
  SaturnRef.current.rotation.y += axisSpeed
},[])

const [hovered, hover] = React.useState(false)
useEffect(() => {
  document.body.style.cursor = hovered? 'pointer' : 'auto'
} , [hovered])

useFrame (({clock}) => updateSaturnPos(clock))

const handleUpdatePlanet = () => {
  usePlanetStore.getState().setPlanet(name); // Correct way to access the setPlanet function
  setOpen(true)
};


  return (
    <group ref={SaturnRef} onClick={handleUpdatePlanet}>
    <mesh receiveShadow castShadow onPointerOver={()=>hover(true)} onPointerOut={()=>hover(false)}   position={[0, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhongMaterial map ={SaturnTexture}   shininess={1000} emissive={0xffffff} emissiveMap={SaturnTexture}
         emissiveIntensity={hovered? 2: .3}
          />
    </mesh>
    <mesh rotation-x={Math.PI *.5} >
        <torusGeometry args={[.5, 1.3, 2.5, 100]} />
        <meshPhongMaterial map ={RingTexture}   shininess={1000} emissive={0xffffff} emissiveMap={SaturnTexture}
         emissiveIntensity={hovered? 2: .3}
          />
    </mesh>
    </group>
  )
}
)
export default Saturn