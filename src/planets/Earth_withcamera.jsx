import React from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import ISS from '../models/ISS'
import Moon from './Moon'
import { useEffect } from 'react'
import { useState } from 'react'

const Earth = React.memo(({displacementScale}) => {
const [earthTexture, EarthNormalMap, EarthSpecularMap, EarthDisplacementMap, EarthEmmisiveMap] = useTexture(['./textures/earth.jpg',
 "./textures/earth_normal_map.jpg",
 "./textures/earth_specular_map.jpg",
  "./textures/earth_displacement_map.jpg",
 './textures/earth_nightmap.jpg']) 
const earthRef = React.useRef()

const updateEarthPos = React.useCallback( (clock)=>{
  const angle = clock.getElapsedTime() * 0.05
  const distance = 10
  const x = Math.sin(angle) * distance
  const z = Math.cos(angle) * distance
  earthRef.current.position.set(x, 0, z)
  earthRef.current.rotation.y += .002
},[])
useFrame (({clock, camera}) => {
  TWEEN.update()
  updateEarthPos(clock)
  const earthPositionRef = earthRef.current.position
  
  if(followingEarth){
    const cameraTargetPosition = new THREE.Vector3(
      earthPositionRef.x + 6,
      earthPositionRef.y +2,
      earthPositionRef.z + 5
    )
    new TWEEN.Tween(CameraPosition).to(cameraTargetPosition, 100).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(() => {
      setCameraPosition(CameraPosition)
    }).start()
    
    new TWEEN.Tween(CameraTarget).to(earthPositionRef, 100).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{
      setCameraTarget(CameraTarget).start()
    })
  }else{
    const originalCameraPosition = new THREE.Vector3(16.14*2, 8.32*2, 19.81*2)
    const originalCameraTarget = new THREE.Vector3(0, 0, 0)

    new TWEEN.Tween(CameraPosition).to(originalCameraPosition, 100).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(() => {
      setCameraPosition(CameraPosition)
    }).start()
    new TWEEN.Tween(CameraTarget).to(originalCameraTarget, 100).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{
      setCameraTarget(CameraTarget).start()
    })

   

  }
  camera.lookAt(CameraTarget)
  camera.position.copy(CameraPosition)
  camera.updateProjectionMatrix()


})


const [hovered, hover] = React.useState(false)
useEffect(() => {
  document.body.style.cursor = hovered? 'pointer' : 'auto'
} , [hovered])


const [followingEarth, setFollowingEarth] = React.useState(false)
const [CameraPosition, setCameraPosition] = useState(new THREE.Vector3(16.14, 8.32, 19.81))
const [CameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0))
const toggleFollowingEarth = ()=>{
  setFollowingEarth((prev) => !prev)
}

  return (
    <group ref={earthRef}> 
    <mesh  receiveShadow castShadow onPointerOver={()=>hover(true)} onPointerOut={()=>hover(false)} onClick={toggleFollowingEarth}>
        <sphereGeometry  args={[1, 64, 64]} />
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