import React, { useEffect, useState } from "react";
import { TEAMS } from "../data/teams";

const Club = ({ nationality, FONT_BODY, FONT_MAIN }) => {
  const getRandomTeams = (nationality) => {
    const teams = [...TEAMS[nationality]];
    const shuffledTeams = teams.sort(() => 0.5 - Math.random());
    return shuffledTeams.slice(0, 3);
  };
  const [availableTeams, setAvailableTeams] = useState(
    getRandomTeams(nationality),
  );

  useEffect(() => {
    setAvailableTeams(getRandomTeams(nationality));
  }, [nationality]);
  return (
    <>
      <h1
        style={{ fontFamily: FONT_MAIN }}
        className="text-white text-4xl font-bold text-center m-7"
      >
        Choose your club
      </h1>
      <div className="w-[30%] text-white border-2 border-white rounded-xl p-4 mt-6 shadow-2xl grid gap-2 grid-cols-3">
        {availableTeams.map((team, key) => (
          <div
            key={key}
            className="bg-gray-800 border-2 border-white rounded-xl p-4 text-center"
          >
            <p className="text-lg font-bold">{team}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Club;
