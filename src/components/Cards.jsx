
import React from "react";
import { motion, scale } from "motion/react";
const Cards = ({ data, ref }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.1 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="bg-zinc-900/90 h-[30vh] w-[23vh]  rounded-[25px] p-4 py-6 relative overflow-hidden"
      >
        <p>{data.icon}</p>
        <br />
        <p>{data.desc}</p>
        <div className=" mt-[3.5vh] flex justify-between">
          <p>{data.size}</p>
          <p>{data.downloadingIcon}</p>
        </div>
        <div
          className={`${
            data.downloadingText === "Upload" ? "bg-green-400" : "bg-blue-500"
          } w-full h-[5vh] absolute left-0 bottom-0 text-center flex items-center justify-center text-xl font-semibold `}
        >
          {data.downloadingText}
        </div>
      </motion.div>
    </>
  );
};

export default Cards;
