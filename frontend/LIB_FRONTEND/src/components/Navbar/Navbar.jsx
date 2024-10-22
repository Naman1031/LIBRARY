import React from "react";
import logo from "../../assets/logo_gif.gif";

const Navbar = () => {
  return (
    <nav className="w-full relative flex justify-between items-center h-12 px-5 py-10 z-10">
      <div className="pic text-2xl  font-mono font-bold h-[250px]">
        <img src={logo} alt="" className="h-full w-full" />
      </div>
      <div className="options">
        <ul className="flex gap-10">
          <li>
            <a href="/reserveseat" className="text-lg font-serif">
              Reserve Seat
            </a>
          </li>
          <li>
            <a href="/subscriptions" className="text-lg font-serif">
              Subscriptions
            </a>
          </li>
          <li>
            <a href="/about" className="text-lg font-serif">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-full bg-yellow-300 hover:bg-blue-100">
          Search
        </button>
        <button className="px-4 py-2 rounded-full bg-yellow-300 hover:bg-blue-100">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
