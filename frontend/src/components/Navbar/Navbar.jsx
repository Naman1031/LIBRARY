import React from "react";
import logo from "../../assets/logo_gif.gif";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full fixed  flex justify-between items-center h-[6rem] px-5 py-10 z-[100] bg-[#F2E6DC] rounded-lg">
      <div className="h-[160px]">
        <img src={logo} alt="" className="h-full w-full cursor-pointer" onClick={() => navigate('')} />
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
        <button className="px-4 py-2 rounded-full bg-[#F4BD0A] text-white hover:bg-white hover:text-[#F4BD0A]">
          Search
        </button>
        <button className="px-4 py-2 rounded-full bg-[#F4BD0A] text-white hover:bg-white hover:text-[#F4BD0A]">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
