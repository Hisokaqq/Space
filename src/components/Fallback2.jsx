import CircleLoader from "./CircleLoader";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
const Fallback2 = ( ) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });

    return animation.stop;
  }, []);

  return (
    <div className="fallback bg-gray-950" >
      <div className="text-gray-100 h-20 text-5xl  p-5 absolute right-0 top-0">
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="click">

          <motion.h1>{rounded}</motion.h1>
          </motion.div>
      </div>
    </div>
  );
};

export default Fallback2;