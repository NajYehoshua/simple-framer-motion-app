import { motion } from "framer-motion";
import { useState } from "react";

const ObjectOne = () => {
  const [boxSwitch, setBoxSwitch] = useState(false);

  let xCoords = !boxSwitch ? 0 : 200;
  0;
  let rotateBoxTo = !boxSwitch ? 0 : 50;

  const onClickBox = (e) => {
    e.preventDefault();

    setBoxSwitch(!boxSwitch);
  };

  return (
    <motion.div
      className={!boxSwitch ? "box" : "box box-active_color"}
      animate={{ x: xCoords, rotate: rotateBoxTo }}
      whileHover={{ scale: 1.1 }}
      onClick={onClickBox}
    ></motion.div>
  );
};

export default ObjectOne;
