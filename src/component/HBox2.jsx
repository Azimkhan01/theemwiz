import React from "react";
import { Link } from "react-router-dom";

function HBox2() {
  return (
    <div className=" w-full p-4 bg-orange-50">
      {/* company logo */}

      <div className="w-full flex justify-center items-center p-6">
        <img src="/public/logo.png" />
      </div>

      {/* hr */}

      <div className="flex justify-center p-4">
        <hr className="w-5/6 text-orange-200" />
      </div>

      {/* content that contain img and text */}

      <div className=" h-screen flex flex-col md:flex-row w-full">
        <div className=" h-1/2 md:h-auto relative w-full md:w-1/2">
          <div className="absolute w-4/6 top-25 right-0 md:top-50 md:right-0 z-[5]">
            <img src="/public/hb2-bg/Bitmap.png" />
          </div>
          <div className="absolute w-4/6 top-0 right-0 md:top-15 md:right-0 z-[4]">
            <img src="/public/hb2-bg/block.png" />
          </div>
          <div className="absolute -top-10  md:top-2.5 right-10 md:right-25">
            <img src="/public/hb2-bg/combineShape.png" />
          </div>
          <div className="absolute w-2/6 left-12 top-10 md:left-25 md:top-20 z-[3]">
            <img src="/public/hb2-bg/Path.png" />
          </div>
          <div className="absolute w-4/6 right-6 md:top-0 md:right-50 z-[1]">
            <img src="/public/hb2-bg/Rectangle.png" />
          </div>
          <div className="absolute bottom-8 left-10 md:bottom-50 md:left-25 z-[6] p-2.5 rounded-full bg-orange-500 h-1/3 w-1/3 md:h-[30%] md:w-[30%] flex justify-center items-center  ">
            <img src="/public/hb2-bg/Person.png" className="object-contain" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5">
          <h1 className="px-2 md:p-0 w-full md:w-4/6  text-2xl text-orange-400 ">
            ABOUT
          </h1>
          <h1 className="px-2 md:p-0 w-full md:w-4/6  text-5xl font-bold text-[#391400] ">
            An Experience <br /> Design Agency
          </h1>
          <p className="px-2 md:p-0 w-full md:w-4/6  text-[#391400]">
            Provides a full service range
          </p>
          <p className="px-2 md:p-0 w-full md:w-4/6  text-[#391400A3]">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </p>
          <Link to={"/about"} className=" self-start md:self-center md:w-4/6   font-bold rounded">
            <span className="bg-gray-100 text-[#391400] px-4 py-2">
              ABOUT US
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HBox2;
