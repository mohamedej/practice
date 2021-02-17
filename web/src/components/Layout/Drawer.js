import { X } from "heroicons-react";
import React from "react";

function Drawer({ open, handleClose }) {
  if (!open) return null;

  return (
    <div className="bg-gray-300 absolute p-4 top-0 left-0 w-4/12 h-screen shadow-md md:hidden">
      <div className="w-full flex justify-end">
        <X onClick={handleClose} className="cursor-pointer text-gray-400" />
      </div>
    </div>
  );
}

export default Drawer;
