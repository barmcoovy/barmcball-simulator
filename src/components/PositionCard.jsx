import React from "react";

const Position = ({
  selectedPosition,
  handlePositionClick,
  FONT_MONO,
  FONT_MAIN,
}) => {
  const POSITIONS = [
    { name: "GK", x: 50, y: 90 },

    { name: "LB", x: 12, y: 68 },
    { name: "CB", x: 38, y: 72 },
    { name: "CB", x: 62, y: 72 },
    { name: "RB", x: 88, y: 68 },

    { name: "CM", x: 32, y: 52 },
    { name: "CM", x: 68, y: 52 },

    { name: "LW", x: 15, y: 32 },
    { name: "CAM", x: 50, y: 38 },
    { name: "RW", x: 85, y: 32 },

    { name: "ST", x: 50, y: 15 },
  ];

  return (
    <>
      <h3
        className="text-white text-xl font-bold mb-4"
        style={{ fontFamily: FONT_MAIN }}
      >
        Choose your position
      </h3>

      {/* Football Pitch Container */}
      <section className="relative w-[25%] h-120 bg-[#1ba85e] border-2 border-white rounded-xl overflow-hidden shadow-2xl">
        {/* --- PITCH MARKINGS --- */}
        {/* Halfway Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/80 -translate-y-1/2 pointer-events-none" />

        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 w-28 h-28 border-2 border-white/80 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Top Penalty Area */}
        <div className="absolute top-0 left-1/2 w-32 h-12 border-b-2 border-x-2 border-white/80 -translate-x-1/2 pointer-events-none" />

        {/* Bottom Penalty Area */}
        <div className="absolute bottom-0 left-1/2 w-32 h-12 border-t-2 border-x-2 border-white/80 -translate-x-1/2 pointer-events-none" />

        {/* --- POSITIONS MAP --- */}
        {POSITIONS.map((position, key) => {
          const isSelected =
            selectedPosition?.name === position.name &&
            selectedPosition?.key === key;

          return (
            <div
              onClick={() => handlePositionClick(position.name, key)}
              key={key}
              className={`flex justify-center absolute items-center h-12 w-12 font-bold rounded-full border-2 cursor-pointer backdrop-blur-xs transition-all duration-300 shadow-md ${
                isSelected
                  ? "bg-white  border-yellow-400 text-yellow-500 shadow-yellow-300/50 scale-110 z-10"
                  : "bg-black/60 text-white border-white hover:bg-white hover:text-black hover:shadow-white"
              }`}
              style={{
                left: position.x + "%",
                top: `${position.y}%`,
                transform: "translate(-50%, -50%)",
                fontFamily: FONT_MONO,
              }}
            >
              <span>{position.name}</span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Position;
