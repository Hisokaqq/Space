import { Scroll } from '@react-three/drei'
import React, { useRef } from 'react'
import TextLoop from "react-text-loop";
import ArrowDown from './ArrowDown';

const CanvasHtml = ({open}) => {
   
  return (
    <Scroll html style={{width: '100%'}} >
              <div  style={{ color: '#cdcbca',position: 'absolute', top: `15vh`,left: '50%', fontSize: '4em', transform: `translate(-50%,-50%)` }} className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out`}>
              <TextLoop interval={10000} >
              <h1 className="title" >SPACE</h1>
              <h1 className='title' >Expolore</h1>
              </TextLoop>
              </div>
              <ArrowDown />

              
              <div  className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out row absolute top-[132vh]`} >
              <div className="flex-col flex gap-4 absolute lg:left-[10%] sm:left-5 w-[540px]" >
                <h2  className="mini-title text-gray-200" >Mysteries of the Cosmos</h2>
                <p >Embark on a celestial journey to explore black holes, dark matter, and cosmic radiation, unraveling the enigmatic wonders that shape our vast universe.</p>
                </div>

              </div>

              <div className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out row absolute top-[230vh]`} >
                <div className="flex-col flex gap-4 absolute right-5  lg:w-[540px] sm:w-[240px] ">
                  <h2 className="mini-title text-gray-200" >Astronomy's Stellar Beauty</h2>
                  <p >Discover the mesmerizing allure of celestial bodies - from dazzling nebulae and shimmering stars to majestic planets - and behold the magnificence of our cosmic neighborhood.</p>                
                </div>
              </div>
              
              <a href='https://solarsystem.nasa.gov/' target="_blank" style={{ position: 'absolute', top: `350vh`,left: '50%', transform: `translate(-50%,-50%)`}}    className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out text-white p-4 poin hover:text-slate-400 transition-all ease-in-out`} >Explore Space</a>
    </Scroll>
  )
}

export default CanvasHtml