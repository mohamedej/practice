import React, { useState } from "react";
import Button from "../Button";
import Logo from "../../vector.svg";
import { Menu } from "heroicons-react";
import Drawer from "./Drawer";
import useJledi from "../useJledi";

function Navbar() {
  const { open, handleClose, handleOpen, toggleOpen } = useJledi();

  return (
    <div className="flex-1">
      <nav
        className={`bg-gray-800  ${
          open ? "ml-auto md:ml-0 md:w-full w-8/12" : "w-full ml-0"
        }`}
      >
        <div className="w-full flex p-4">
          <div className="w-full flex items-center">
            <div className="flex flex-grow md:flex-grow-0">
              <Menu
                onClick={toggleOpen}
                className="cursor-pointer hover:scale-110 text-gray-200 md:hidden "
              />
              <Drawer handleClose={handleClose} open={open} />
            </div>
            <div className="flex space-x-2">
              <img src={Logo} alt="logo" className="w-12" />
              <h1 className="text-gray-200 text-2xl font-semibold font-sans">
                Ksad bish
              </h1>
            </div>
          </div>
          <div className="w-full space-x-4  justify-end mx-4 md:flex hidden">
            <a href="" className="text-gray-200 text-xl">
              Home
            </a>
            <a href="" className="text-gray-200 text-xl">
              About
            </a>
            <a href="" className="text-gray-200 text-xl">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
