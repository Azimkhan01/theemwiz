import React from 'react';

function Hbox10() {
  const data = [
    {
      img: "hb10-bg/image.png",
      name: "Azah Anyeni",
      skill: "Designer"
    },
    {
      img: "hb10-bg/img2.png",
      name: "Izabella Tabakova",
      skill: "Product Designer"
    },
    {
      img: "hb10-bg/img3.png",
      name: "Roelof Bekkenenks",
      skill: "React Developer"
    },
    {
      img: "hb10-bg/img4.png",
      name: "Leonardo Oliveira",
      skill: "Illustrator"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-[#28293E] py-10">
      {/* Scrollable Card Container */}
      <div className="w-full md:w-4/6 flex gap-4 overflow-auto md:overflow-visible px-4 md:px-0">
        {data.map((d, i) => (
          <Card key={i} img={d.img} name={d.name} skill={d.skill} />
        ))}
      </div>

      {/* Dots (Pagination Indicators) */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <button
            key={i}
            className={`h-2.5 w-2.5 rounded-full ${
              i === 0 ? 'bg-orange-500' : 'border border-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hbox10;

// Card Component
const Card = ({ img, name, skill }) => {
  return (
    <div className="min-w-[250px] md:w-1/4 flex-shrink-0 overflow-visible bg-[#1E1F2E] rounded-lg">
      <div className="h-48 md:h-75 w-full overflow-visible">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-white text-xl font-bold capitalize">{name}</p>
        <p className="text-white/60">{skill}</p>
      </div>
    </div>
  );
};
