import React from "react";

const LibraryPopup = ({ setPopup, data }) => {
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
      <div className="h-[90vh] w-[90vw] bg-[#84524dfe] rounded-2xl p-[20px]">
        <h1 className="uppercase text-white text-[30px] font-semibold font-mono">
          {data.name}
        </h1>
        <a className="text-blue-500 hover:underline cursor-pointer" href={"/"}>
          📍{data.pin_msg}
        </a>
      </div>
    </div>
  );
};

export default LibraryPopup;
