import { motion } from "framer-motion";
import React from "react";

export default function Button({
  className,
  children,
  rounded,
  fullWidth,
  ...rest
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={`px-4 py-2 bg-gray-600 m-4 text-gray-500 ${
        rounded ? "rounded-xl" : ""
      } ${className ? className : ""} ${fullWidth ? "w-full" : ""}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
