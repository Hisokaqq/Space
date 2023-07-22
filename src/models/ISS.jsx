import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { useCallback } from 'react'

const ISS =  React.memo(() => {
    const memorizeISS = React.useMemo(() => {
        return useGLTF('./models/ISS_stationary/ISS_stationary.gltf')
    }, [])
    const ISSRef = React.useRef()
    const updateMoonPos = useCallback( (clock)=>{
      ISSRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.05) * 2
        ISSRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.05) * 2

    }, [])
    useFrame (({clock}) => updateMoonPos(clock))
  return (
    <mesh ref={ISSRef}>
        <primitive object={memorizeISS.scene} position={[0,0,0]} scale={.005}/>
    </mesh>
  )
})

export default ISS