import { motion } from "framer-motion";
import React from "react";

function Card({ bgColor, pic, float }) {
  return (
    <div
      className={`w-full  flex my-8 ${float ? "justify-start" : "justify-end"}`}
    >
      <motion.div
        className={`w-12/12  md:w-6/12 p-2 flex h-96  rounded-xl ${bgColor}  justify-around items-center `}
      >
        <motion.div className="w-4/12 md:w-4/12">
          <motion.img
            animate={{ y: [0, 10] }}
            transition={{ y: { duration: 1, yoyo: Infinity, ease: "linear" } }}
            src={pic}
            alt="picture"
          />
        </motion.div>
        <div className="w-6/12 text-center text-white text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          sapiente veniam suscipit dolor quidem obcaecati soluta reiciendis
          cumque ipsam perspiciatis at ducimus, ex eveniet. Tenetur autem
          similique quos harum dolore!
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
