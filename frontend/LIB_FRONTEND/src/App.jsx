import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import { Route,Routes } from "react-router-dom";
import ReserveSeat from "./components/ReserveSeat/ReserveSeat";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Subscriptions from "./components/Subscriptions/Subscriptions";

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/reserveseat" element={<ReserveSeat />} />
      <Route path="/subscriptions" element={<Subscriptions/>} />
    </Routes>
    </>
  );
}

export default App;
//rounded-br-[400px] rounded-bl-[400px]
