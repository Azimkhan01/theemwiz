import React from "react";

function HBox5() {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* left section */}
      <div className="flex justify-center items-center p-4 w-full md:w-1/2 bg-orange-50 relative" >
        <div>
          <img src="/public/hb5-bg/Bitmap.png" className="rounded-md" />
        </div>
        <div className="absolute" >
            <img src="/public/hb5-bg/play.svg" />
        </div>
      </div>

      {/* right section */}

      <div className="w-full md:w-1/2 p-4 bg-orange-50 flex flex-col justify-center items-center">
        <h1 className="w-full md:w-1/2 text-left text-orange-400 py-2 font-sans">
          Video Reel
        </h1>
        <h1 className="w-full md:w-1/2 text-left text-[#391400] py-2 text-4xl font-extrabold">
          Unlock The Greatest Value Possible
        </h1>
        <p className="w-full md:w-1/2 text-left text-[#391400A3] py-2 ">
          Design, business understanding, ability to put themselves in the
          merchant's shoes meant to partner.
        </p>
      </div>
    </div>
  );
}

export default HBox5;
