import { useState } from "react";
import { TEAMS } from "../data/teams";

const Club = ({
  nationality,
  FONT_BODY,
  FONT_MAIN,
  handleClubSelection,
  selectedClub,
}) => {
  const getRandomTeams = (nationality) => {
    const teams = [...TEAMS[nationality]];

    const shuffledTeams = teams.sort(() => 0.5 - Math.random());

    return shuffledTeams.slice(0, 3);
  };

  const [availableTeams] = useState(() => getRandomTeams(nationality));

  return (
    <div className="w-full max-w-4xl px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1
          style={{ fontFamily: FONT_MAIN }}
          className="text-white text-4xl font-bold"
        >
          Choose your club
        </h1>

        <p style={{ fontFamily: FONT_BODY }} className="text-gray-400 mt-2">
          Select one of the available clubs
        </p>
      </div>

      {/* Teams */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {availableTeams.map((team) => (
          <div
            key={team}
            onClick={() => handleClubSelection(team)}
            style={{ fontFamily: FONT_BODY }}
            className={`
              ${
                selectedClub === team
                  ? "bg-green-600 border-green-500"
                  : "bg-gray-900 border-gray-700 hover:bg-gray-800 hover:border-gray-600"
              }

              border
              rounded-xl
              p-5
              text-center
              transition
              cursor-pointer
            `}
          >
            {/* Logo */}
            <div
              className="
                w-32
                h-32
                mx-auto
                mb-5
                rounded-full
                bg-gray-800
                border
                border-gray-600
                flex
                items-center
                justify-center
              "
            >
              <span className="text-4xl">⚽</span>
            </div>

            {/* Team name */}
            <h2
              style={{ fontFamily: FONT_MAIN }}
              className="text-white text-2xl font-bold"
            >
              {team}
            </h2>

            {/* Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClubSelection(team);
              }}
              className={`
                ${
                  selectedClub === team
                    ? "bg-gray-900 border-gray-700 "
                    : "bg-green-600 hover:border-green-500"
                }
                mt-5
                w-full
                text-white
                font-semibold
                py-2
                rounded-lg
                transition
                cursor-pointer
              `}
            >
              {selectedClub === team ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Club;
