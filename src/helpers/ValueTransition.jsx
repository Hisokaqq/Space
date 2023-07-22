import { useEffect, useState } from "react";

function useTransition(open, targetValue, duration) {
    const [value, setValue] = useState(0);
  
    const startTimestamp = performance.now();
    const endTimestamp = startTimestamp + duration;
  
    const step = (timestamp) => {
      const progress = Math.min(1, (timestamp - startTimestamp) / duration);
      const easedProgress = easeInOutCubic(progress);
      const newValue = value + (targetValue - value) * easedProgress;
      setValue(newValue);
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
  
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
  
    useEffect(() => {
      let animationFrameId = null;
  
      const animate = (timestamp) => {
        if (timestamp < endTimestamp) {
          animationFrameId = requestAnimationFrame(animate);
        }
  
        step(timestamp);
      };
  
      animate(performance.now());
  
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [open]);
  
    return value;
  }

  export default useTransition;