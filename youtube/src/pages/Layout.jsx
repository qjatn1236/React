import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div style={{ backgroundColor: "blue", color: "white", height: "100vh" }}>
      <Navbar />
      <div style={{ backgroundColor: "pink" }}>
        <Outlet />
      </div>
    </div>
  );
}
