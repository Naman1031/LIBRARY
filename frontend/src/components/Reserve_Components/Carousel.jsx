import React, { useState } from "react";
import lib1 from "../../assets/lib-1.png";
import lib2 from "../../assets/lib1.jpg";
import lib3 from "../../assets/lib2.jpg";

const imageUrls = [lib1, lib2, lib3];
const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleRight = () => {
    if (imageIndex == imageUrls.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  setTimeout(handleRight, 2000);
  return (
    <div className="bg-red-300 h-[50%] w-[40%] rounded-2xl ">
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {imageUrls.map((url) => (
          <img
            className="rounded-2xl imgur flex-shrink-0 flex-grow-0 transition-all duration-150"
            key={url}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              translate: `${-100 * imageIndex}%`,
            }}
            src={url}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
