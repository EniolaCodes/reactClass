import React, { useState } from "react";

export default function App() {
  const [car, setCar] = useState({
    brand: "Benz",
    model: "Lamborghini",
    year: "2024",
    color: "grey",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "red" };
    });
  };
  return (
    <div className="text-2xl font-extrabold bg-[#009E65] text-[#fff]">
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button
        onClick={updateColor}
        className="cursor-pointer px-6 py-4 bg-amber-700 text-black"
      >
        Change color
      </button>
    </div>
  );
}
