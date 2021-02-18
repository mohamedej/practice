import { Menu as MenuUi, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import React from "react";

function DropMenu() {
  return (
    <MenuUi>
      {/* {({ open }) => (
        <> */}
      <MenuUi.Button className="text-gray-200 text-xl">Contact</MenuUi.Button>
      {/* <Transition
            show={open}
            // enter="transition duration-100 ease-out"
            // enterFrom="transform scale-95 opacity-0"
            // enterTo="transform scale-100 opacity-100"
            // leave="transition duration-75 ease-out"
            // leaveFrom="transform scale-100 opacity-100"
            // leaveTo="transform scale-95 opacity-0"
          > */}
      <MenuUi.Items className="flex flex-col items-center text-gray-900 font-semibold text-md absolute w-52 h-44 p-4 m-8 rounded-sm bg-gray-300">
        <MenuUi.Item>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" w-full mt-2 text-center border-b-2 border-gray-800 hover:text-gray-50 hover:bg-gray-600 hover:border-opacity-0"
          >
            <a className="w-full m-2 " href="/account-settings">
              Supp
            </a>
          </motion.div>
        </MenuUi.Item>
        <MenuUi.Item>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" w-full mt-2 text-center border-b-2 border-gray-800 hover:text-gray-50 hover:bg-gray-600 hover:border-opacity-0"
          >
            <a className="w-full m-2 " href="/account-settings">
              Send Us a message
            </a>
          </motion.div>
        </MenuUi.Item>
        <MenuUi.Item>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className=" w-full mt-2 text-center border-b-2 border-gray-800 hover:text-gray-50 hover:bg-gray-600 hover:border-opacity-0"
          >
            <a className="w-full m-2 " href="/account-settings">
              Say something
            </a>
          </motion.div>
        </MenuUi.Item>
      </MenuUi.Items>
      {/* </Transition>
        </>
      )} */}
    </MenuUi>
  );
}

export default DropMenu;
