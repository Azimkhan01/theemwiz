import React from "react";
import { Link } from "react-router-dom";

function HBox8() {
  return (
    <div className="bg-[#28293E] py-20  flex justify-center items-center overflow-visible">
      <div className="bg-[#FDF0E9] flex flex-col md:flex-row items-center w-[90%] md:w-4/6 rounded-lg">
        {/* left section */}
        <div className="relative w-full md:w-[30%] flex justify-center items-center flex-col px-4 pt-25 md:py-0">
          <h1 className="text-orange-400 tracking-widest py-3 w-full md:w-[80%]">GET STARTED</h1>
          <p className="text-[#391400] font-bold text-4xl md:text-2xl py-3 text-left w-full md:w-5/6">We Help Companies<br></br> Move Faster</p>
          <Link to={'/contact'} className="w-full md:w-[80%] py-3" ><span className="py-2 px-4 bg-orange-500 text-white uppercase font-bold rounded text-sm">CONTACT US</span></Link>
            <div className="absolute -top-18 left-5 md:-top-40 md:left-20 scale-110">
                <img src="/hb8-bg/icon.png" />
            </div>
        </div>
        {/* center section */}
            <div className="w-full md:w-[35%]">
                <img src="/hb8-bg/block.png" />
            </div>
        {/* right section */}
            <div style={{ backgroundImage: `url('/hb8-bg/Path.png')` }} className="flex justify-center  md:justify-start  bg-no-repeat overflow-visible w-full md:w-[30%] bg-center">
                <img src="/hb8-bg/Bitmap.png" className="md:scale-120 md:-translate-y-10 md:translate-x-10" />
            </div>  
      </div>
    </div>
  );
}

export default HBox8;
