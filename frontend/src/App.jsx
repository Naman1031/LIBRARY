import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ReserveSeat from "./pages/ReserveSeat/ReserveSeat";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Subscriptions from "./pages/Subscriptions/Subscriptions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserveseat" element={<ReserveSeat />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </>
  );
}

export default App;

