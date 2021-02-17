import React, { Fragment, useState } from "react";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <div className="w-full">
        <Navbar handleOpen={handleOpen} open={drawerOpen} />
        <Drawer handleClose={handleClose} open={drawerOpen} />
        <main>{children}</main>
      </div>
    </Fragment>
  );
}
