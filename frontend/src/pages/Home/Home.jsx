import React from "react";
import Layout from "../../components/Layout/Layout";
import Map from "../../components/Home_components/Map";

const branches = [
  {
    name: "Connaught Place Library",
    lat: 28.6315,
    lng: 77.2167,
    address: "Connaught Place, New Delhi",
  },
  {
    name: "India Gate Library",
    lat: 28.6129,
    lng: 77.2295,
    address: "India Gate, New Delhi",
  },
  {
    name: "Hauz Khas Village Library",
    lat: 28.5535,
    lng: 77.1926,
    address: "Hauz Khas, New Delhi",
  },
  {
    name: "Chandni Chowk Library",
    lat: 28.6562,
    lng: 77.2301,
    address: "Chandni Chowk, Old Delhi",
  },
  {
    name: "Lotus Temple Library",
    lat: 28.5535,
    lng: 77.2588,
    address: "Lotus Temple, New Delhi",
  },
  {
    name: "Qutub Minar Library",
    lat: 28.5244,
    lng: 77.1855,
    address: "Qutub Minar, Mehrauli, New Delhi",
  },
  {
    name: "Delhi University Library",
    lat: 28.6884,
    lng: 77.209,
    address: "North Campus, Delhi University",
  },
  {
    name: "Nehru Place Library",
    lat: 28.5494,
    lng: 77.2518,
    address: "Nehru Place, New Delhi",
  },
  {
    name: "Karol Bagh Library",
    lat: 28.651,
    lng: 77.1909,
    address: "Karol Bagh, New Delhi",
  },
  {
    name: "Sarojini Nagar Library",
    lat: 28.5743,
    lng: 77.1991,
    address: "Sarojini Nagar, New Delhi",
  },
  {
    name: "Lajpat Nagar Library",
    lat: 28.5678,
    lng: 77.2433,
    address: "Lajpat Nagar, New Delhi",
  },
];

function Home() {
  return (
    <>
      <Layout />
      <div className="relative h-[500px] w-[500px] top-40 rounded-2xl">
        <Map  branches={branches} maxDistance={5} />
      </div>
    </>
  );
}

export default Home;
