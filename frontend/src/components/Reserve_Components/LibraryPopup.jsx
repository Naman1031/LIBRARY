import { div } from "framer-motion/client";
import React, { useState } from "react";
import Carousel from "./Carousel";
import LibrarySelector from "./LibrarySelector";

const LibraryPopup = ({ setPopup, data }) => {
  const [content, setContent] = useState("lib-info");

  const submitHandler = (event, params) => {
    event.preventDefault();
    setContent(params);
  };

  return (
    <div
      className={`backdrop-blur-md bg-white bg-opacity-10 top-0 fixed overflow-hidden z-[1000] h-[100%] w-[100%] flex flex-col items-center justify-center transition-opacity duration-500`}
    >
      <div
        className="cursor-pointer text-xl font-bold flex items-center justify-center"
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
            <form onSubmit={(e) => submitHandler(e, "select-seat")}>
              <div className="choices flex items-center place-self-center justify-between w-[80%] mx-auto">
                <div className="left-form">
                  <div className="my-8">
                    <p className="text-2xl my-2 text-white">SELECT DATE</p>
                    <input
                      type="date"
                      className="p-4 py-5 appearance-none h-[40px] w-[400px] bg-[#D9D9D9] rounded-md"
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
                    <select className="p-4 py-2 w-[400px] bg-[#D9D9D9] rounded-md">
                      <option value="" disabled selected hidden>
                        Select Duration
                      </option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
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
                className="w-[350px] bg-[#F4BD0A] capitalize p-5 rounded-2xl text-white font-bold hover:bg-white hover:text-[#F4BD0A] transition-all duration-500 text-2xl block mx-auto mt-4"
              >
                Check
              </button>
            </form>
          </div>
        </div>
      ) : content === "select-seat" ? (
        <LibrarySelector />
      ) : (
        <div className="overflow-scroll scrollbar-hide h-[90vh] w-[90vw] bg-[#AE8B83] rounded-2xl p-[50px] px-[60px]">
          <div className="w-full flex justify-around items-center mt-5">
            <div>
              <h1 className="text-[70px] font-bold mb-4">{data.name}</h1>
              <ul className="text-xl">
                <li>
                  <p className="inline text-2xl font-semibold">Timings</p>: 10
                  am to 2 pm
                </li>
                <li>
                  <p className="inline text-2xl font-semibold">Location</p>:{" "}
                  {data.pin_msg}
                </li>
                <li>
                  <p className="inline text-2xl font-semibold">Socials</p>:
                </li>
              </ul>
            </div>
            <Carousel />
          </div>
          <div className="about my-[50px]">
            <h1 className="text-[30px] font-bold">ABOUT US</h1>
            <p className="my-5 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ex
              molestiae sapiente. Reiciendis velit laborum magni ex enim, ad
              laudantium rerum quibusdam perferendis illum. Quam mollitia totam
              necessitatibus corporis optio! Quos sapiente rem odit saepe
              dolores blanditiis voluptates modi exercitationem. Iusto omnis
              dolorum laudantium rem accusamus nam quidem reiciendis non
              adipisci eum nobis voluptate impedit corporis harum, sit eligendi
              sapiente. At quidem quis, officia ipsa doloribus odit veniam iure
              nostrum atque eius perferendis voluptates reiciendis qui hic
              quibusdam unde commodi. Ex necessitatibus architecto nesciunt fuga
              corporis quo, nisi iure quidem! Laboriosam nulla, sequi earum
              atque cupiditate necessitatibus qui eum tempora quibusdam unde
              quis, molestias eveniet architecto id!
            </p>
          </div>
          <div>
            <button
              onClick={() => setContent("select-params")}
              className="bg-[#F4BD0A] capitalize p-5 rounded-2xl text-white font-bold hover:bg-white hover:text-[#F4BD0A] transition-all duration-500 text-lg block mx-auto mt-10"
            >
              Check Available Seat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryPopup;
