import React from 'react'

import AnimatedStars from './components/AnimatedStars'
import Circles from './components/Circles'
import usePlanetStore from './helpers/SelectedPlanetStore'
import Earth from './planets/Earth'
import Planet from './planets/Planet'
import Saturn from './planets/Saturn'
import Sun from './planets/Sun'
const Experience = ({setOpen}) => {
 

  return (
    <  >
      
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
    </>
  )
}

export default Experience