import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import playstore from "../../assets/playstore.jpg";
import appstore from "../../assets/appstore.jpg";
import lib1 from "../../assets/carousel.png";
import carousel2 from "../../assets/carousel2.png";
import lib3 from "../../assets/lib3.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Home() {
  const carouselImages = [lib1, carousel2, lib1, lib1, lib1, lib1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Layout />
      {/* Upper Section */}
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-center h-[470px] z-10 relative mt-4 ">
          <div className="cursor-pointer">
            <BiSolidRightArrow
              className="w-9 h-9 rotate-180 mt-16"
              onClick={handlePrev}
            />
          </div>
          <div className="justify-between mx-5 mt-16 flex px-4 h-[320px]">
            <img
              src={carouselImages[currentIndex]}
              alt="Library View"
              className="w-[700px] h-full rounded-lg shadow-lg cursor-pointer"
            />
          </div>
          <div className="cursor-pointer">
            <BiSolidRightArrow className="w-9 h-9 mt-16" onClick={handleNext} />
          </div>
        </div>
        <div className="flex justify-center space-x-2 z-10 relative">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Headings */}
      <h1 className="text-2xl font-semibold mt-8 text-center text-gray-800 translate-x-[-50%] ml-[50%]">
        VISIT THE LIBRARY FOR PERSONALIZED EXPERIENCE
      </h1>
      <h2 className="text-xl font-semibold text-gray-600 mb-8 translate-x-[-50%] ml-[50%] text-center mt-2">
        EXPLORE LIBRARIES NEAR YOU
      </h2>

      {/* Reservation Section */}

      <div className="flex items-center justify-between bg-[#C1A690] h-[275px] w-[800px] rounded-md mx-auto mb-10 relative px-1">
        <div className="relative left-[70px] flex flex-col">
          <div className="flex my-6">
            <div className="flex flex-col w-[218px]">
              <h1 className="text-white">Library</h1>
              <h1 className="text-white">Ratings</h1>
              <h1 className="text-white">Location</h1>
              <h1 className="text-white">Price</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white">XYZ</h1>
              <h1 className="text-white">⭐⭐⭐⭐</h1>
              <h1 className="text-white text-nowrap">Near School</h1>
              <h1 className="text-white">500/hr</h1>
            </div>
          </div>
          <button
            className="relative px-9 py-2 font-bold text-white bg-[#F4BD0A] border border-black rounded-lg shadow-md hover:bg-white hover:text-[#F4BD0A] "
            onClick={() => navigate("/reserveseat")}
          >
            RESERVE NOW
          </button>
        </div>
        <img
          src={lib3}
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
