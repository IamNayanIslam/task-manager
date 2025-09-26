import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-green-800 text-white px-3 py-4">
      <div className="logo">
        <h1 className="text-lg font-bold cursor-pointer">Task Tracker</h1>
      </div>
      <div></div>
    </nav>
  );
};
