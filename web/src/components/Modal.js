import { motion } from "framer-motion";
import { X } from "heroicons-react";
import React from "react";
import ClickAwayListener from "react-click-away-listener";
import { useMediaQuery } from "react-responsive";

function Modal({ open, handleClose, fullScreenMobile }) {
  const aboveMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (!open) return null;

  return (
    <motion.div
      animate={{ opacity: fullScreenMobile && aboveMobile ? 1 : 0.6 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-screen h-screen bg-black  absolute top-0 flex items-center justify-center ${
        fullScreenMobile ? "opacity-100 md:opacity-60" : "opacity-60"
      }`}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <div
          className={` bg-white ${
            fullScreenMobile
              ? "w-screen h-screen md:w-4/12 md:h-56 opacity-100"
              : "w-4/12 h-56"
          }`}
        >
          <div className="flex justify-end p-4 ">
            <X onClick={handleClose} className="cursor-pointer" />
          </div>
        </div>
      </ClickAwayListener>
    </motion.div>
  );
}

export default Modal;
