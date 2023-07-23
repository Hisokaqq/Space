import React, { useEffect, useState } from 'react';

const ArrowDown = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset); 
  return (
    <div className="svg2" >
        <img src="./assets/arrow-down.svg" alt="Your SVG" className="w-full"/>
    </div>
  )
}

export default ArrowDown