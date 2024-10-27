import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Map from "../../components/Home_components/Map";
import playstore from "../../assets/playstore.jpg";
import appstore from "../../assets/appstore.jpg";
import lib1 from "../../assets/carousel.jpg";
import lib2 from "../../assets/lib2.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const branches = [
    {
      name: "Connaught Place Library",
      lat: 28.6315,
      lng: 77.2167,
      address: "Connaught Place, New Delhi",
    },
    {
      name: "India Gate Library",
      lat: 28.6129,
      lng: 77.2295,
      address: "India Gate, New Delhi",
    },
    {
      name: "Hauz Khas Village Library",
      lat: 28.5535,
      lng: 77.1926,
      address: "Hauz Khas, New Delhi",
    },
    {
      name: "Chandni Chowk Library",
      lat: 28.6562,
      lng: 77.2301,
      address: "Chandni Chowk, Old Delhi",
    },
    {
      name: "Lotus Temple Library",
      lat: 28.5535,
      lng: 77.2588,
      address: "Lotus Temple, New Delhi",
    },
    {
      name: "Qutub Minar Library",
      lat: 28.5244,
      lng: 77.1855,
      address: "Qutub Minar, Mehrauli, New Delhi",
    },
    {
      name: "Delhi University Library",
      lat: 28.6884,
      lng: 77.209,
      address: "North Campus, Delhi University",
    },
    {
      name: "Nehru Place Library",
      lat: 28.5494,
      lng: 77.2518,
      address: "Nehru Place, New Delhi",
    },
    {
      name: "Karol Bagh Library",
      lat: 28.651,
      lng: 77.1909,
      address: "Karol Bagh, New Delhi",
    },
    {
      name: "Sarojini Nagar Library",
      lat: 28.5743,
      lng: 77.1991,
      address: "Sarojini Nagar, New Delhi",
    },
    {
      name: "Lajpat Nagar Library",
      lat: 28.5678,
      lng: 77.2433,
      address: "Lajpat Nagar, New Delhi",
    },
    {
      name: "Janakpuri Library",
      lat: 28.6219,
      lng: 77.089,
      address: "Janakpuri, New Delhi",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <>
    
    <Layout />
      <div>
        {/* Upper Section */}
        <div className="w-full flex items-center justify-center h-[500px] z-10 relative">
          <a href="/">
            <BiSolidRightArrow className="w-9 h-9 rotate-180 mt-10" />
          </a>
          <div className="justify-between mx-4 flex px-4">
            <img
              src={lib1}
              alt="Library View"
              className="w-[650px] h-[350px] rounded-lg shadow-lg cursor-pointer mt-[4.8rem]"
            />
          </div>
          <div className="cursor-pointer">
            <BiSolidRightArrow className="w-9 h-9 mt-10" />
          </div>
        </div>
      </div>

      {/* Headings */}
      <h1 className="text-2xl font-semibold my-4 text-center text-gray-800 translate-x-[-50%] ml-[50%]">
        VISIT THE LIBRARY FOR PERSONALIZED EXPERIENCE
      </h1>
      <h2 className="text-xl font-semibold text-gray-600 mb-8 translate-x-[-15%] ml-[47%]">
        EXPLORE LIBRARIES NEAR YOU
      </h2>

      {/* Reservation Section */}
      <div className="flex items-center justify-evenly  bg-[#A86C22] h-[300px] w-[800px] rounded-md mx-auto mb-12 sticky px-2">
        {/* <div className="relative h-[300px] w-[300px] top-40 rounded-2xl">
          <Map branches={branches} maxDistance={5} />
        </div> */}
        <button className="px-9 py-2 font-bold text-white bg-[#F4BD0A] border border-black rounded-lg shadow-md hover:bg-white hover:text-[#F4BD0A]" onClick={() => navigate('/reserveseat')}>
          RESERVE NOW
        </button>
        <img
          src={lib2}
          alt="Library Interior"
          className="h-60 w-auto mx-4 rounded-lg shadow-lg"
        />
      </div>

      {/* Lower Section */}
      <div className="w-full flex flex-col items-center py-8 z-10 sticky">
        <h2 className="text-2xl font-semibold mb-4">DOWNLOAD OUR APP</h2>
        <div className="flex space-x-4">
          <a href="/">
            <img
              src={playstore}
              alt="Google Play"
              className="google w-36 h-auto transition-transform hover:scale-105"
            />
          </a>
          <a href="/">
            <img
              src={appstore}
              alt="Apple Store"
              className="apple w-36 h-auto transition-transform hover:scale-105"
            />
          </a>
        </div>
        <nav className="mt-8">
          <ul className="flex space-x-4 text-lg text-gray-700 font-sans">
            <li>
              <a href="/" className="hover:text-gray-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-500">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-500">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
