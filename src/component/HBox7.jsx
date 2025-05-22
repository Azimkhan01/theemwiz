import React from "react";
import { Link } from "react-router-dom";

function HBox7() {
  const data = [
    {
      h: "Design",
      h2: "SOFA",
      css: "",
      img: "/hb7-bg/sofa.png",
    },
    {
      h: "Branding",
      h2: "KEYBOARD",
      css: "",
      img: "/hb7-bg/keyboard.png",
    },
    {
      h: "Illustation",
      h2: "WORK MEDIA",
      css: "",
      img: "/hb7-bg/workmedia.png",
    },
    {
      h: "Motion",
      h2: "DDDOne",
      css: "",
      img: "/hb7-bg/DDDone.png",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-wrap w-full p-4 gap-x-4 gap-y-4 bg-[#28293E]">
        {data.map((d, i) => (
          <Card key={i} img={d.img} css={d.css} h={d.h} h2={d.h2} />
        ))}
      </div>
      <div className=" flex justify-center items-center py-10 md:py-15 bg-[#28293E]" >
            <Link to={'/about'} className="px-6 py-3 border border-white/20 text-white font-extrabold rounded" >Explore More</Link>
      </div>
    </>
  );
}

export default HBox7;

const Card = ({ img, css, h, h2 }) => {
  return (
    <div className={` relative ${css}`}>
      <div className="w-full h-full">
        <img src={img} />
      </div>

      <div className="absolute bottom-0 p-8 flex flex-col gap-4">
        <button className="bg-white rounded-4xl py-2 text-[#391400] text-sm">
          {h}
        </button>
        <p className="font-extrabold text-2xl text-white">{h2}</p>
      </div>
    </div>
  );
};
