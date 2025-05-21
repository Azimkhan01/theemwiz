import React from "react";
import { Link } from "react-router-dom";

function HBox1() {
  return (
    <div className="h-auto w-full bg-[#28293E] flex flex-col-reverse md:flex-row items-center px-4 py-6 mt-18">
      {/* left section */}

      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6">
        <p className="text-orange-500 font-thin text-sm px-4">MODERN STUDIO</p>

        <div className="relative w-full px-4">
          <div className="absolute m-auto -top-10 left-40 md:left-55 z-0 ">
            <img src="/hb1-bg/star.svg" className="z-0" />
          </div>
          <h1 className="md:w-4/6 text-white text-5xl md:text-6xl font-bold text-left z-10 relative">
            We’re Help <br /> To Build Your <br /> Dream Project
          </h1>
        </div>

        <div className="w-5/6 flex justify-center text-left">
          <p className="text-white/60 text-sm">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>

        <div className="py-6 flex gap-3 items-center w-5/6">
          <Link
            to={"/contact"}
            className="bg-orange-500 px-6 py-3 rounded text-white font-semibold"
          >
            How We Work
          </Link>
          <Link to={"/contact"} className="text-white px-6 py-3">
            Contact Us
          </Link>
        </div>

        <div className="flex gap-2 p-4" >
          <div className="flex justify-center items-center">
            <img src="/hb1-bg/bitmap.png" className="w-[80%]" alt="bitmap"  />
          </div>
          <div>
            <p className="text-white/70">"Put themselves in the merchant's shoes"</p>
            <p className="text-white/90 px-1">Meta Inc</p>
          </div>
        </div>
      </div>

      <div className=" w-full md:w-1/2">
        <img className="object-contain" src="/hb1-bg/pic-.png" />
      </div>
    </div>
  );
}

export default HBox1;
