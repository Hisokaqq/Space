import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'

import Circles from './components/Circles'
import Earth from './planets/Earth'
import Planet from './planets/Planet'
import Saturn from './planets/Saturn'
import Sun from './planets/Sun'
import gsap from 'gsap'

const Experience = ({setOpen}) => {
 
  const spaceRef = useRef()
  const scroll = useScroll()
  const tl = useRef()
  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    tl.current
    .to(spaceRef.current.position, {x: 5}, 2)
    .to(spaceRef.current.position, {z: -10}, 2)
    .to(spaceRef.current.rotation, {y: -10}, 2)

    .to(spaceRef.current.position, {x: -10}, 6)
    .to(spaceRef.current.rotation, {y: 5}, 6)

    .to(spaceRef.current.position, {x: 0}, 11)
    .to(spaceRef.current.position, {z: -15}, 11)
    



  },[])

  return (
    <group ref={spaceRef}>
        <Sun axisSpeed={.025}/>
        <Circles />

        <group >
          <Earth displacementScale={.1} distance = {7} speed={.29} axisSpeed = {.1674} size = {.65} name = {"Earth"} setOpen={setOpen} />
          <Planet path = './textures/mercury.jpg' distance = {3} speed={.47} axisSpeed = {.0011} size={.4} name = {"Mercury"}  setOpen={setOpen} />
          <Planet path = './textures/venus.jpg' distance = {5} speed={.35} axisSpeed = {.00065} size={.6} name = {"Venus"}   setOpen={setOpen} />
          <Planet path = './textures/mars.jpg' distance = {10} speed={.24} axisSpeed = {.0868} size={.5} name = {"Mars"}   setOpen={setOpen} />
          <Planet path = './textures/jupiter.jpg' distance = {13} speed={.13} axisSpeed = {.0047} size={1.5} name = {"Jupiter"}   setOpen={setOpen} />
          <Saturn distance = {16} speed={.097} axisSpeed = {.0034} size={1} name={"Saturn"}   setOpen={setOpen} />
          <Planet path = './textures/uranus.jpg' distance = {21} speed={.068} axisSpeed = {.0099} size={.8}  ring = {true} name = {"Uranus"}   setOpen={setOpen} />
          <Planet path = './textures/neptune.jpg' distance = {26} speed={.054} axisSpeed = {.0097} size={.8} ring = {true} name = {"Neptune"}   setOpen={setOpen} />
        </group>
    </group>
  )
}

export default Experience