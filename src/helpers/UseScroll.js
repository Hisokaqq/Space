import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";

import React, { useEffect } from 'react'

const UseScroll = () => {
    const [element, view] = useInView({ threshold: .5 });
    const controls = useAnimation();
  
    useEffect(() => {
      if (view) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    }, [view, controls]);

    return [element, controls];
}

export default UseScroll