import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Animate = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onClick = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="animate">
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="animate-box"
            >
              <p>1</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div>
        <button onClick={onClick}>Click me</button>
      </div>
    </>
  );
};

export default Animate;
