import { motion } from "framer-motion";
import { X } from "heroicons-react";
import React from "react";
import { useMediaQuery } from "react-responsive";

function Drawer({ open, handleClose, fullScreenMobile }) {
  const aboveMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (!open) return null;

  return (
    <motion.div
      animate={{ opacity: fullScreenMobile && aboveMobile ? 1 : null }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full absolute top-0 left-0 flex items-center justify-center opacity-100 z-50"
    >
      <div
        className={` bg-gradient-to-br from-gray-400 via-gray-200  to-gray-50  w-screen h-screen opacity-100 ${
          fullScreenMobile ? "w-screen h-screen md:hidden" : "null"
        }`}
      >
        <div className="flex items-center text-center flex-col p-4 ">
          <div className="w-full flex justify-end mb-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <X
                onClick={handleClose}
                className="cursor-pointer text-gray-400"
              />
            </motion.div>
          </div>
          <div className="flex w-full flex-col mt-16 items-center font-bold">
            <a
              href=""
              className="w-8/12 rounded-full m-2 p-2 bg-gradient-to-br from-gray-600  to-gray-900  text-gray-200 shadow-lg"
            >
              Home
            </a>
            <a
              href=""
              className="w-8/12 rounded-full m-2 p-2 bg-gradient-to-br from-gray-600  to-gray-900 text-gray-200 shadow-md"
            >
              About
            </a>
            <a
              href=""
              className="w-8/12 rounded-full m-2 p-2 bg-gradient-to-br from-gray-600 to-gray-900 text-gray-200 shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Drawer;
