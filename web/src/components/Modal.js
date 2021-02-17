import { motion } from "framer-motion";
import { X } from "heroicons-react";
import React from "react";

function Modal({ open, handleClose }) {
  if (!open) return null;

  return (
    <motion.div
      animate={{ opacity: 0.6 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen bg-black opacity-60 absolute top-0 flex items-center justify-center"
    >
      <div className="w-4/12 h-56 bg-white">
        <div className="flex justify-end p-4 ">
          <X onClick={handleClose} className="cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
