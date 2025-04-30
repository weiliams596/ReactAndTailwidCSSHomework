import React from "react";

import image from "../Assets/image2.png";
import image2 from "../Assets/image3.png";
import image3 from "../Assets/image4.png";

export default function FeaturedWorks() {
  return (
    <section className="mt-5 mb-5 flex flex-col">
      <h2>Featured Works</h2>
      <div className="flex flex-row mb-2 mt-2">
        <img className="w-[22%]" src={image} alt="image" />
        <div className="flex flex-col justify-around ml-2">
          <h1>Designing Dashboards</h1>
          <div className="flex flex-row justify-around w-[30%]">
            <nav className=" rounded-3xl bg-black text-white w-[20%] text-center">
              2020
            </nav>
            <p className="text-gray-400">Dashboard</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="flex flex-row mb-2 mt-2">
        <img className="w-[22%]" src={image2} alt="image" />
        <div className="flex flex-col justify-around ml-2">
          <h1>Vibrant Portraits of 2020</h1>
          <div className="flex flex-row justify-around w-[30%]">
            <nav className=" rounded-3xl bg-black text-white w-[20%] text-center">
              2018
            </nav>
            <p className="text-gray-400">Illustration</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="flex flex-row mb-2 mt-2">
        <img className="w-[22%]" src={image3} alt="image" />
        <div className="flex flex-col justify-around ml-2">
          <h1>36 Days of Malayalam type</h1>
          <div className="flex flex-row justify-around w-[30%]">
            <nav className=" rounded-3xl bg-black text-white w-[20%] text-center">
              2018
            </nav>
            <p className="text-gray-400">Typography</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  );
}
