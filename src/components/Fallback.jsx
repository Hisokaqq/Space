import { motion } from 'framer-motion';
import CircleLoader from './CircleLoader.jsx';
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

const Fallback = () => {
  return (
    <div className="fallback bg-gray-950 p-5 pl-7">
      <div>
        <div className="flex">
          <div className="text-gray-100 2xl:text-8xl xl:text-7xl sm:text-5xl text-2xl inline">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay:  index * .1, duration: 1 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="ml-5 scale-50 sm:scale-100  self-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay:  words.length * .1, duration: 1 }} // Add the delay of 1 second after the last word
            >
              <CircleLoader />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fallback;