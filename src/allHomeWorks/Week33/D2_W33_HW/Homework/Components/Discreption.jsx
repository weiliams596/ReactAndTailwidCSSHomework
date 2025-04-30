import React from "react";

import image from "../Assets/image1.png";

export default function Discreption() {
  return (
    <section className="grid grid-cols-2 gap-20 mb-[20px]">
      <div className="flex flex-col justify-around">
        <h1>
          Hi, I am John,
          <br />
          Creative Technologist
        </h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className=" bg-[#FF6464] text-white px-[50px] py-[20px] w-[300px]">Download Resume</button>
      </div>
      <div className="flex justify-center w-[60%] object-cover">
        <img src={image} alt="Image" />
      </div>
    </section>
  );
}
