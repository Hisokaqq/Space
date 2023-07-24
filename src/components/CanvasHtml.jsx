import { Scroll } from '@react-three/drei';
import React from 'react';
import ArrowDown from './ArrowDown';
import { motion } from "framer-motion";
import { fade, fadeUp, titleAnim } from '../helpers/Animations';
import UseScroll from '../helpers/UseScroll';

const CanvasHtml = ({ open }) => {
  const [ element, controls ] = UseScroll();
  const [ element2, controls2 ] = UseScroll();
  const [ element3, controls3 ] = UseScroll();

  return (
    <Scroll html style={{ width: '100%' }} >
      <div style={{ color: '#cdcbca', position: 'absolute', top: `15vh`, left: '50%', fontSize: '4em', transform: `translate(-50%,-50%)` }} className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out`}>
        <motion.h1 initial="hidden" animate={"show"} variants={titleAnim} className="title" >Explore SPACE</motion.h1>
      </div>
      <motion.div initial="hidden" animate={"show"} variants={titleAnim}>
      <ArrowDown />
      </motion.div>
      <motion.div ref={element} animate={controls}  variants={fade(0, open)} initial="hidden"  className={` row absolute top-[132vh]`} >
        <div className="flex-col flex gap-4 absolute lg:left-[10%] sm:left-5 w-[540px]" >
          <div className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out `}>
            <h2 className="mini-title text-gray-200" >Mysteries of the Cosmos</h2>
            <p >Embark on a celestial journey to explore black holes, dark matter, and cosmic radiation, unraveling the enigmatic wonders that shape our vast universe.</p>
          </div>
        </div>
      </motion.div>

      <motion.div ref={element2} animate={controls2}  variants={fade(1)} initial="hidden" className={`${open && "opacity-0"}  row absolute top-[230vh]`} >
        <div className="flex-col flex gap-4 absolute right-5  lg:w-[540px] sm:w-[240px] ">
          <div  className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out `}>
          <h2 className="mini-title text-gray-200" >Astronomy's Stellar Beauty</h2>
          <p >Discover the mesmerizing allure of celestial bodies - from dazzling nebulae and shimmering stars to majestic planets - and behold the magnificence of our cosmic neighborhood.</p>
          </div>
        </div>
      </motion.div>
      <div className={`${open && "opacity-0"} transition-opacity duration-300 ease-in-out overflow-hidden h-20`} style={{ position: 'absolute', top: `350vh`, left: '50%', transform: `translate(-50%,-50%)` }}>
        <motion.a ref={element3} animate={controls3}  variants={fadeUp} initial="hidden" href='https://solarsystem.nasa.gov/' target="_blank"  className={` text-white p-4 poin hover:text-slate-400 transition-colors ease-in-out`} >Explore Space</motion.a>
      </div>
    </Scroll>
  );
}

export default CanvasHtml;
