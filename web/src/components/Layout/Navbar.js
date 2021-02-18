import Logo from "../../vector.svg";
import { Menu } from "heroicons-react";
import Drawer from "./Drawer";
import useJledi from "../useJledi";
import DropMenu from "./DropMenu";

function Navbar() {
  const { open, handleClose, handleOpen, toggleOpen } = useJledi();

  return (
    <div className="flex-1">
      <nav
        className={`bg-gray-800 "w-full ml-0"
        }`}
      >
        <div className="w-full flex p-4">
          <div className="w-full flex items-center">
            <div className="flex flex-grow md:flex-grow-0">
              <Menu
                onClick={toggleOpen}
                className="cursor-pointer text-gray-200 md:hidden "
              />
              <Drawer handleClose={handleClose} open={open} fullScreenMobile />
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
            <DropMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
