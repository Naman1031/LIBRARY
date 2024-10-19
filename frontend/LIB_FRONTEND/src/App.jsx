import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[80vh] w-full top-[0px]  rotate-[0.43] bg-[#F2E6DC] rounded-b-[50%] absolute -z-0"></div>
      <Navbar />
      <div className="h-[80vh] w-full top-[800.79px]  rotate-[0.43] bg-[#F2E6DC] rounded-t-[50%] absolute -z-0"></div>
    </>
  );
}

export default App;
//rounded-br-[400px] rounded-bl-[400px]
