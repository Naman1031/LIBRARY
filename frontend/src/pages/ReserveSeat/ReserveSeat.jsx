import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Layout2 from "../../components/Layout/Layout2";
import { PinContainer } from "../../components/ui/3d-pin";
import LibraryPopup from "../../components/Reserve_Components/LibraryPopup";

const libraries = [
  {
    name: "Shanti Library",
    href: "https://www.justdial.com/Delhi/Shanti-Library-Talab-Park-Talab-Chowk-Mandawali/011PXX11-XX11-230904132238-W3B5_BZDET",
    pin_msg: "Mandawli - New Delhi",
    description:
      "Home Tutor providing preparation for exams such as IAS, IIT, IIT JEE and tutoring subjects such as Civil Services, Commerce",
    image:
      "https://content.jdmagicbox.com/v2/comp/delhi/b5/011pxx11.xx11.230904132238.w3b5/catalogue/shanti-library-mandawali-delhi-libraries-3pwcd974du.jpg",
  },
  {
    name: "City Central Library",
    href: "https://www.justdial.com/Delhi/City-Central-Library/011PXX11-XX11-230904143238-W3B5_BZDET",
    pin_msg: "Karol Bagh - New Delhi",
    description:
      "A well-equipped library offering books on various subjects, including fiction, non-fiction, and academic resources.",
    image:
      "https://via.placeholder.com/150/1f8dc5/ffffff?text=City+Central+Library",
  },
  {
    name: "Readers Paradise",
    href: "https://www.justdial.com/Delhi/Readers-Paradise/011PXX11-XX11-230904154238-W3B5_BZDET",
    pin_msg: "Connaught Place - New Delhi",
    description:
      "Offers a wide range of books, magazines, and newspapers for reading enthusiasts. Great place for quiet study sessions.",
    image:
      "https://via.placeholder.com/150/ffcc00/000000?text=Readers+Paradise",
  },
  {
    name: "The Learning Hub",
    href: "https://www.justdial.com/Delhi/The-Learning-Hub/011PXX11-XX11-230904165238-W3B5_BZDET",
    pin_msg: "Dwarka - New Delhi",
    description:
      "Specializes in educational resources and tutoring services for school and college students. Offers a quiet environment for study.",
    image:
      "https://via.placeholder.com/150/33cc33/ffffff?text=The+Learning+Hub",
  },
  {
    name: "Knowledge Point Library",
    href: "https://www.justdial.com/Delhi/Knowledge-Point-Library/011PXX11-XX11-230904176238-W3B5_BZDET",
    pin_msg: "Rohini - New Delhi",
    description:
      "Provides a collection of academic and professional books, with dedicated sections for exam preparation materials.",
    image:
      "https://via.placeholder.com/150/ff6666/ffffff?text=Knowledge+Point+Library",
  },
  {
    name: "Study Circle Library",
    href: "https://www.justdial.com/Delhi/Study-Circle-Library/011PXX11-XX11-230904187238-W3B5_BZDET",
    pin_msg: "Lajpat Nagar - New Delhi",
    description: "A popular library for competitive exam preparation, offering books and resources for exams like UPSC, SSC, and Bank PO.",
    image: "https://via.placeholder.com/150/663399/ffffff?text=Study+Circle+Library",
  },
];

const ReserveSeat = () => {
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({});
  return (
    <div>
      {popup ? <LibraryPopup popup={popup} data={data} setPopup={setPopup} /> : null}
      <Layout2 />
      <div className="max-w-full  relative top-[100px] p-[50px] ">
        <h1 className="text-2xl font-mono font-bold">
          CHOOSE A LIBRARY NEAR YOU
        </h1>
        <div className="library-list flex items-center justify-evenly flex-wrap px-[100px]">
          {libraries.map((library, index) => (
            <PinContainer
              data={library}
              setPopup={setPopup}
              setData={setData}
              key={index}
              title={library.pin_msg}
              containerClassName="max-w-[100vw] w-[auto] my-10 flex items-between flex-wrap "
              className="h-[20rem] w-[20rem] bg-[#84524D9E]  p-3 rounded-2xl"
            >
              <div className="flex flex-col items-center justify-evenly  h-full">
                <div className="image h-[11rem] w-[17rem]">
                  <img
                    src={library.image}
                    className="h-full w-full rounded-lg "
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h3 className="text-lg font-bold text-white">
                    {library.name}
                  </h3>
                  <p className="text-sm text-[#F2E6DC]">
                    {library.description}
                  </p>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReserveSeat;
