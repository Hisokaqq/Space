import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Fallback2 = ({ handleClick }) => {
  const controls = useAnimationControls();

  const handleClickAnim = async () => {
    await controls.start({ y: 100 });
    // Add a 0.5-second delay before calling handleClick()
    await handleClick();
  };

  useEffect(() => {
    // Add event listener for keydown event
    const handleKeyDown = (event) => {
      handleClickAnim();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fallback fallback2 bg-gray-950" onClick={handleClickAnim}>
      <div className="text-gray-100 h-20 text-5xl overflow-hidden">
        <motion.div animate={controls}>
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="click">
            To Explore Space Click Any <div className="kbd">key</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fallback2;
