import React, { Fragment } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <div className="w-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </Fragment>
  );
}
