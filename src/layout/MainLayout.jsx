import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar className="z-10" />
      <Outlet />
    </>
  );
};

export default MainLayout;
