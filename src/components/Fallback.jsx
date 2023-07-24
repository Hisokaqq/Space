import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';

const words = [
  "Voyaging ",
  "beyond ",
  <br />,
  "exploring ",
  "vast ",
  "cosmos ",
  <br />,
  "humanity's ",
  "quest ",
  "unfolds",
];

const Fallback = ({ handleClick }) => {
  const controls = useAnimationControls();
  const controls2 = useAnimationControls();
  const [newMessage, setNewMessage] = useState(false);

  const handleClickAnim = async () => {
    await controls.start({ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } });
    await setNewMessage(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClickAnim();
    }, 5000); // 5000 milliseconds (5 seconds) delay

    return () => clearTimeout(timer);
  }, []);

  const handleClickAnim2 = async () => {
    if (newMessage) {
      await controls2.start({ y: 100 });
      // Add a 0.5-second delay before calling handleClick()
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 0.5 seconds
      handleClick(); // Call the handleClick function after the delay
    }
  };

  useEffect(() => {
    // Add event listener for keydown event
    const handleKeyDown = (event) => {
      if (newMessage) {
        handleClickAnim2();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [newMessage]);

  return (
    <div className="fallback bg-gray-950 p-5 pl-7" onClick={handleClickAnim2}>
      <div>
        <motion.div animate={controls} className="flex">
          <div className="text-gray-100 2xl:text-8xl xl:text-7xl sm:text-5xl text-2xl inline">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.3, duration: 1 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      {newMessage && (
        <div className="text-gray-100 h-20 text-5xl overflow-hidden absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
          <motion.div animate={controls2}>
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="click">
              To Explore Space Click Any <div className="kbd">key</div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Fallback;
