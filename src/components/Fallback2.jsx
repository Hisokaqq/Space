import { motion } from "framer-motion";
import CircleLoader from "./CircleLoader";

const Fallback2 = ( ) => {
  

  return (
    <div className="fallback bg-gray-950" >
      <div className="text-gray-100 h-20 text-5xl  p-5 absolute right-0 top-0">
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="click">
          <CircleLoader />
          </motion.div>
      </div>
    </div>
  );
};

export default Fallback2;