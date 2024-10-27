import React, { useState } from "react";

const LibrarySelector = () => {
  const initializeColors = () => {
    return Array(18)
      .fill("#6A5F5F")
      .map((color) => (Math.random() < 0.3 ? "#FF0000" : color)); 
  };

  const [colors, setColors] = useState(initializeColors);

  const changeColor = (index) => {
    if (colors[index] === "#FF0000") {
      return;
    }
    const newColors = [...colors];
    newColors[index] = newColors[index] === "#00FF00" ? "#6A5F5F" : "#00FF00";
    setColors(newColors);
  };

  return (
    <div className="overflow-scroll scrollbar-hide h-[90vh] w-[90vw] bg-[#AE8B83] rounded-2xl p-[50px] px-[60px]">
      <h1 className="text-[50px] font-bold text-white text-center">
        SELECT SEAT
      </h1>
      <div className="seat-book">
        <h1 className="text-[30px] text-white font-semibold">Area B</h1>
        <div className="my-[100px] w-full h-[80px] bg-[#052936]">
          <div className="up bottom-[50px] relative flex w-full justify-around">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, index) => (
              <div
                key={val}
                onClick={() => changeColor(index)}
                style={{ backgroundColor: colors[index] }} 
                className={`w-[50px] text-center text-xl font-medium h-[50px] border-2 border-black rounded-t-full ${
                  colors[index] === "#FF0000"
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {"B" + val}
              </div>
            ))}
          </div>
          <div className="down top-[30px] relative flex w-full justify-around">
            {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((val, index) => (
              <div
                key={val}
                onClick={() => changeColor(index + 9)}
                style={{ backgroundColor: colors[index + 9] }} 
                className={`w-[50px] text-center text-xl font-medium h-[50px] border-2 border-black rounded-b-full ${
                  colors[index + 9] === "#FF0000"
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {"B" + val}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarySelector;
