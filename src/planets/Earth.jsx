import React from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import ISS from '../models/ISS'
import Moon from './Moon'
import { useEffect } from 'react'
import { useState } from 'react'
import usePlanetStore from '../helpers/SelectedPlanetStore'

const Earth = React.memo(({displacementScale, distance, speed, axisSpeed, size, name, setOpen}) => {

const [earthTexture, EarthNormalMap, EarthSpecularMap, EarthDisplacementMap, EarthEmmisiveMap] = useTexture(['./textures/earth.jpg',
 "./textures/earth_normal_map.jpg",
 "./textures/earth_specular_map.jpg",
  "./textures/earth_displacement_map.jpg",
 './textures/earth_nightmap.jpg']) 
const groupRef = React.useRef()
const earthRef = React.useRef()

const updateEarthPos = React.useCallback( (clock)=>{
  const angle = clock.getElapsedTime() * speed
  
  const x = Math.sin(angle) * distance
  const z = Math.cos(angle) * distance
  groupRef.current.position.set(x, 0, z)
  earthRef.current.rotation.y += axisSpeed
},[])
useFrame (({clock, camera}) => {
  updateEarthPos(clock)
})


const [hovered, hover] = React.useState(false)
useEffect(() => {
  document.body.style.cursor = hovered? 'pointer' : 'auto'
} , [hovered])

const handleUpdatePlanet = () => {
  usePlanetStore.getState().setPlanet(name); // Correct way to access the setPlanet function
  setOpen(true)
};



  return (
    <group ref={groupRef}  > 
    <mesh ref = {earthRef} onClick={handleUpdatePlanet} receiveShadow castShadow onPointerOver={()=>hover(true)} onPointerOut={()=>hover(false)} >
        <sphereGeometry  args={[size, 64, 64]} />
        <meshPhongMaterial map ={earthTexture}
         normalMap={EarthNormalMap} 
         specularMap={EarthSpecularMap}
         displacementMap ={EarthDisplacementMap}
         displacementScale={displacementScale}
         shininess={1000} 
         emissiveMap ={EarthEmmisiveMap}
         emissive={0xffffff}
         emissiveIntensity={hovered? 10: 1.5}
         />
    </mesh>
    <ISS />
    <Moon  />
    </group>
  )
})

export default Earth