import React from "react";

export default function WebHome() {
  const cardData = [
    {
      id: 1,
      image: "rocket.svg",
      title: "Introduction to Rocket Science",
      body: "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and ",
    },
    {
      id: 2,
      image: "atom.svg",
      title: "Astro Physics",
      body: "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and ",
    },
    {
      id: 3,
      image: "ai-chip.svg",
      title: "Artificial Intelligence",
      body: "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and ",
    },
    {
      id: 4,
      image: "telescope.svg",
      title: "Astro Physics",
      body: "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and ",
    },
  ];

  return (
    <div className="py-5 px-5 lg:px-10 flex flex-col gap-2">
      <div className=" flex justify-between items-center">
        <span className="font-poppins-400 font-extrabold">
          Popular Topics 🔥
        </span>
        <div className="hidden lg:flex gap-2">
          <button className="border w-8 h-8 justify-center items-center flex rounded-md">
            <img src="arrow.svg" className="rotate-180" alt="" />
          </button>
          <button className="border w-8 h-8 justify-center items-center flex rounded-md">
            <img src="arrow.svg" className="" alt="" />
          </button>
        </div>
      </div>
      <div className="  flex flex-row gap-4 overflow-x-scroll scroll-smooth no-scrollbar">
        {cardData.map((item) => (
          <div className="flex flex-col p-4 gap-2 border min-w-52 h-72 lg:min-w-80 w-80 lg:h-48 justify-between items-center rounded-xl">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <img className="w-24 h-24" src={item.image} alt="Ai-Chip" />
              <div className="flex flex-col gap-2">
                <span className="font-poppins-400 font-extrabold text-sm tracking-widest">
                  {item.title}
                </span>
                <p className="font-poppins-200  tracking-wider  text-xs">
                  Covers fundamentals, design, construction, operation and
                  programming of robots.
                </p>
              </div>
            </div>
            <button className="hidden lg:block border w-full p-2 rounded-lg">READ</button>
          </div>
        ))}
      </div>
    </div>
  );
}
