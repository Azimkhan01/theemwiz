import React from "react";
import { Link } from "react-router-dom";

function HBox4() {
  const data = [
    "Full service range including",
    "Technical skills, design, business",
    `Themselves in the merchant's`,
  ];

  return (
    <div className="flex flex-col md:flex-row bg-orange-50">
      {/* left section */}

      <div className="flex justify-center items-center flex-col px-4 md:p-0 ">
        <h1 className="text-orange-400 w-full md:w-4/6 py-2 ">HOW WE WORK </h1>
        <h1 className="text-[#391400] text-4xl font-bold w-full md:w-4/6 py-3">
          Making Your Projects<br></br> Look Awesome
        </h1>
        <p className="text-[#391400A3] w-full md:w-4/6 text-sm">
          Technical skills, design, business understanding, ability to put
          themselves in the merchant's shoes.
        </p>
        <Link to={"/"} className="text-[#391400] w-full md:w-4/6 py-6">
          Read More
        </Link>
      </div>

      {/* right section */}

      <div className="flex justify-center gap-6 items-center flex-col w-full md:w-1/2 py-15 px-4 md:px-0 md:py-30">
        {data.map((d, i) => (
          <Card key={i} head={i + 1} note={d} />
        ))}
      </div>
    </div>
  );
}

export default HBox4;

const Card = ({ head, note }) => {
  return (
    <div className="flex w-full items-center">
      <h1 className=" w-[15%] md:w-[10%]  text-7xl  md:text-6xl  text-[#391400] font-extrabold">
        {head}
      </h1>
      <p className=" w-[75%] md:w-[90%]  text-2xl  md:text-2xl text-left text-[#391400] font-bold">
        {note}
      </p>
    </div>
  );
};
