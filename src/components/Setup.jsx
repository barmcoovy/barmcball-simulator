import React from "react";
import PositionCard from "./PositionCard";
import NationalityCard from "./NationalityCard";
const Setup = ({
  selectedPosition,
  handlePositionClick,
  FONT_MONO,
  FONT_MAIN,
  handleNationalityClick,
  selectedNationality,
  handleGameStatus,
}) => {
  return (
    <>
      <h1
        style={{ fontFamily: FONT_MAIN }}
        className="text-white text-4xl font-bold text-center m-7"
      >
        BarmcBall Simulator 1.0
      </h1>
      <PositionCard
        selectedPosition={selectedPosition}
        handlePositionClick={handlePositionClick}
        FONT_MONO={FONT_MONO}
        FONT_MAIN={FONT_MAIN}
      />
      {selectedPosition.name !== "" ? (
        <NationalityCard
          FONT_MAIN={FONT_MAIN}
          handleNationalityClick={handleNationalityClick}
          selectedNationality={selectedNationality}
        />
      ) : null}
      {selectedPosition.name !== "" && selectedNationality.name !== "" ? (
        <button
          onClick={() => handleGameStatus("clubChoice")}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded *:shadow-lg m-6 transition-all duration-300 cursor-pointer"
        >
          Start Game
        </button>
      ) : null}
    </>
  );
};

export default Setup;
