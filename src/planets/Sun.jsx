import React from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Sun =  React.memo(({axisSpeed}) => {
const [SunTexture] = useTexture(['./textures/sun.jpg']) // [0] is the Sun texture, [1] is the Sun texture
const SunRef = React.useRef()
const updateSunPos = React.useCallback( (clock)=>{
  SunRef.current.rotation.y -= axisSpeed

},[])
useFrame (({clock}) => updateSunPos(clock))
   
  return (
    <mesh  ref={SunRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial map ={SunTexture}  shininess={1000} emissiveMap ={SunTexture} emissiveIntensity={.6} emissive={0xffffff} />
        <pointLight  intensity={1.12} castShadow/>
    </mesh>
  )
})

export default Sun