import React, { useState } from "react";

function useJledi() {
  const [open, setOpen] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return { open, handleClose, handleOpen, toggleOpen };
}

export default useJledi;
