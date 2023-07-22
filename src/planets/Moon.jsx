import React from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Moon =  React.memo(() => {
const [MoonTexture] = useTexture(['./textures/moon.jpg']) // [0] is the Moon texture, [1] is the moon texture
const MoonRef = React.useRef()
const speed = .5
const distance = 1.5
const updateMoonPos = React.useCallback( (clock)=>{
  MoonRef.current.position.x = Math.sin(clock.getElapsedTime() * speed) * distance
  MoonRef.current.position.z = Math.cos(clock.getElapsedTime() * speed) * distance

  MoonRef.current.rotation.y += .002
},[])
useFrame (({clock}) => updateMoonPos(clock))

  return (
    <mesh castShadow receiveShadow ref={MoonRef} position={[0, 0, 0]}>
        <sphereGeometry args={[.3, 32, 32]} />
        <meshPhongMaterial map ={MoonTexture}  shininess={1000} emissive={0xffffff} emissiveMap={MoonTexture} emissiveIntensity={.02}  />
    </mesh>
  )
}
)
export default Moon