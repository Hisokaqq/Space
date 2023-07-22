import React, { useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import usePlanetStore from '../helpers/SelectedPlanetStore'

const Planet =  React.memo(({path, distance, speed, axisSpeed, size, ring = false, name, setOpen}) => {

const [PlanetTexture] = useTexture([path]) // [0] is the Planet texture, [1] is the Planet texture
const PlanetRef = React.useRef()
const updatePlanetPos = React.useCallback( (clock)=>{
  PlanetRef.current.position.x = Math.sin(clock.getElapsedTime() * speed) * distance
  PlanetRef.current.position.z = Math.cos(clock.getElapsedTime() * speed) * distance
  PlanetRef.current.rotation.y += axisSpeed
},[])

const [hovered, hover] = React.useState(false)
useEffect(() => {
  document.body.style.cursor = hovered? 'pointer' : 'auto'
} , [hovered])

useFrame (({clock}) => updatePlanetPos(clock))

const handleUpdatePlanet = () => {
  usePlanetStore.getState().setPlanet(name); // Correct way to access the setPlanet function
  setOpen(true)
};

  return (
    <group receiveShadow castShadow onPointerOver={()=>hover(true)} onPointerOut={()=>hover(false)}  onClick={handleUpdatePlanet } ref={PlanetRef} position={[0, 0, 0]}>
    <mesh >
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhongMaterial map ={PlanetTexture}   shininess={1000} emissive={0xffffff} emissiveMap={PlanetTexture}
         emissiveIntensity={hovered? 2: .3}
          />
    </mesh>
    {ring &&
    <group>
      <mesh rotation-x={Math.PI *.5} >
      <torusGeometry args={[.9, .03, 2, 100]} />
      <meshPhongMaterial   shininess={1000} emissive={0xffffff} 
      emissiveIntensity={hovered? 2: .3}
        />
    </mesh>
    <mesh rotation-x={Math.PI *.5} >
      <torusGeometry args={[.12, .03, 2, 100]} />
      <meshPhongMaterial   shininess={1000} emissive={0xffffff} 
      emissiveIntensity={hovered? 2: .3}
        />
    </mesh>
    <mesh rotation-x={Math.PI *.5} >
      <torusGeometry args={[.15, .03, 2, 100]} />
      <meshPhongMaterial   shininess={1000} emissive={0xffffff} 
      emissiveIntensity={hovered? 2: .3}
        />
    </mesh>
    </group>
    }
    </group>
  )
}
)
export default Planet