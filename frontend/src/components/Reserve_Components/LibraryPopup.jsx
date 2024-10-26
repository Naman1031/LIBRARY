import { div } from "framer-motion/client";
import React, { useState } from "react";

const LibraryPopup = ({ setPopup, data }) => {
  const [content, setContent] = useState("select-params");
  const submitHandler = (e) => {
    e.preventDefault();
    setContent("check-seat");
  };
  return (
    <div
      className={`backdrop-blur-md bg-white  bg-opacity-10 top-0 fixed overflow-hidden z-[1000] h-[100%] w-[100%] flex flex-col items-center justify-center transition-opacity duration-500`}
    >
      <div
        className="cursor-pointer text-xl font-bold flex  items-center justify-center"
        onClick={() => {
          setPopup(false);
        }}
      >
        <p className="mb-1 font-bold text-[40px]">←</p>
        <p>Back</p>
      </div>
      {content === "select-params" ? (
        <div className="h-[90vh] w-[90vw] bg-[#AE8B83] rounded-2xl p-[20px]">
          <h1 className="uppercase text-white text-[30px] font-semibold font-mono">
            {data.name}
          </h1>
          <a
            className="text-blue-800 hover:underline cursor-pointer"
            href={"/"}
          >
            📍{data.pin_msg}
          </a>
          <div className="form">
            <form action="" onSubmit={submitHandler}>
              <div className="choices flex items-center place-self-center justify-between w-[80%] mx-auto">
                <div className="left-form">
                  <div className="my-8">
                    <p className="text-2xl my-2 text-white ">SELECT DATE</p>
                    <input
                      type="date"
                      className="p-4 py-5 appearance-none  h-[40px] w-[400px] bg-[#D9D9D9] rounded-md"
                    />
                  </div>
                  <div className="my-8">
                    <p className="text-2xl my-2 text-white">SELECT TIME</p>
                    <input
                      type="time"
                      className="p-4 py-5 h-[40px] w-[400px] bg-[#D9D9D9] rounded-md"
                    />
                  </div>
                </div>
                <div className="right-form">
                  <div className="my-8">
                    <p className="text-2xl my-2 text-white">SELECT DURATION</p>
                    <select
                      className="p-4 py-2 w-[400px] bg-[#D9D9D9] rounded-md"
                      name=""
                      id=""
                    >
                      <option value="" disabled selected hidden>
                        Select Duration
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                  <div className="my-8">
                    <p className="text-2xl my-2 text-white">
                      SELECT THE NUMBER OF SEATS
                    </p>
                    <input
                      className="rounded-md p-4 py-5 h-[40px] w-[400px] bg-[#D9D9D9]"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#F4BD0A] capitalize p-5 rounded-2xl text-white font-bold hover:bg-white hover:text-[#F4BD0A] transition-all duration-500 text-lg block mx-auto mt-4"
              >
                check available seat
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="h-[90vh] w-[90vw] bg-[#AE8B83] rounded-2xl p-[20px]">
          
        </div>
      )}
    </div>
  );
};

export default LibraryPopup;
