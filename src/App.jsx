import "./App.css";
import { useState } from "react";

import Setup from "./components/Setup";
import Club from "./components/Club";

function App() {
  const FONT_MAIN = "'Oswald', sans-serif";
  const FONT_BODY = "'Inter', sans-serif";
  const FONT_MONO = "'JetBrains Mono', monospace";

  const [selectedClub, setSelectedClub] = useState(null);

  const [player, setPlayer] = useState({
    position: "",
    nationality: "",
    club: "",

    attributes: {
      shooting: 0,
      passing: 0,
      drybling: 0,
      defending: 0,
      physical: 0,
      pace: 0,
      goalkeeping: 0,
    },
    overall: "",
    stats: {
      appearances: 0,
      goals: 0,
      assists: 0,
    },
  });

  const [selectedPosition, setSelectedPosition] = useState({
    name: "",
    key: null,
  });

  const [selectedNationality, setSelectedNationality] = useState({
    name: "",
    key: null,
  });

  const [gameStatus, setGameStatus] = useState("setup");

  // =========================
  // NATIONALITY
  // =========================

  const handleNationalityClick = (nationalityName, nationalityKey) => {
    setSelectedNationality({
      name: nationalityName,
      key: nationalityKey,
    });

    console.log(`Selected nationality: ${nationalityName}`);
  };

  // =========================
  // POSITION
  // =========================

  const handlePositionClick = (positionName, positionKey) => {
    setSelectedPosition({
      name: positionName,
      key: positionKey,
    });

    console.log(`Selected position: ${positionName}`);
  };

  // =========================
  // GAME STATUS
  // =========================

  const handleGameStatus = (newStatus) => {
    setGameStatus(newStatus);
  };

  // =========================
  // CLUB
  // =========================

  const handleClubSelection = (clubName) => {
    setSelectedClub(clubName);

    console.log(`Selected club: ${clubName}`);
  };

  // =========================
  // RANDOM NUMBER
  // =========================

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // =========================
  // RANDOM ATTRIBUTES
  // =========================

  const generateRandomAttributes = (position) => {
    switch (position) {
      case "ST":
        return {
          shooting: random(60, 75),
          passing: random(40, 60),
          drybling: random(55, 75),
          defending: random(10, 30),
          physical: random(50, 70),
          pace: random(60, 75),
          goalkeeping: 0,
        };

      case "RW":
      case "LW":
        return {
          shooting: random(55, 70),
          passing: random(50, 70),
          drybling: random(65, 80),
          defending: random(10, 30),
          physical: random(30, 60),
          pace: random(65, 80),
          goalkeeping: 0,
        };

      case "CM":
        return {
          shooting: random(45, 60),
          passing: random(60, 75),
          drybling: random(50, 75),
          defending: random(10, 30),
          physical: random(50, 60),
          pace: random(50, 70),
          goalkeeping: 0,
        };

      case "CAM":
        return {
          shooting: random(60, 70),
          passing: random(55, 70),
          drybling: random(65, 75),
          defending: random(10, 30),
          physical: random(40, 60),
          pace: random(55, 80),
          goalkeeping: 0,
        };

      case "RB":
      case "LB":
        return {
          shooting: random(30, 50),
          passing: random(45, 60),
          drybling: random(40, 50),
          defending: random(50, 70),
          physical: random(40, 70),
          pace: random(60, 80),
          goalkeeping: 0,
        };

      case "CB":
        return {
          shooting: random(20, 40),
          passing: random(40, 60),
          drybling: random(20, 30),
          defending: random(60, 80),
          physical: random(60, 80),
          pace: random(30, 75),
          goalkeeping: 0,
        };

      case "GK":
        return {
          shooting: random(0, 10),
          passing: random(20, 40),
          drybling: random(0, 20),
          defending: random(0, 10),
          physical: random(20, 50),
          pace: random(20, 75),
          goalkeeping: random(45, 75),
        };

      default:
        return {
          shooting: 0,
          passing: 0,
          drybling: 0,
          defending: 0,
          physical: 0,
          pace: 0,
          goalkeeping: 0,
        };
    }
  };

  // =========================
  // START GAME
  // =========================

  const handleGameStart = (position, nationality, club) => {
    const newAttributes = generateRandomAttributes(position.name);
    const overall = Math.round(
      Object.values(newAttributes).reduce((sum, value) => sum + value, 0) /
        Object.values(newAttributes).length,
    );

    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        position: position.name,
        nationality: nationality.name,
        club: club,
        attributes: newAttributes,
        overall,
      };
    });

    setGameStatus("game");

    console.log(
      `Starting game with position: ${position.name}, nationality: ${nationality.name}, club: ${club}`,
    );

    console.log("Generated attributes:", newAttributes);
  };

  // =========================
  // RENDER
  // =========================

  return (
    <section className="flex flex-col items-center min-h-screen bg-linear-to-b from-green-900 to-black">
      {/* SETUP */}

      {gameStatus === "setup" && (
        <Setup
          FONT_MAIN={FONT_MAIN}
          FONT_BODY={FONT_BODY}
          FONT_MONO={FONT_MONO}
          selectedPosition={selectedPosition}
          selectedNationality={selectedNationality}
          gameStatus={gameStatus}
          handleNationalityClick={handleNationalityClick}
          handlePositionClick={handlePositionClick}
          handleGameStatus={handleGameStatus}
        />
      )}

      {/* CLUB CHOICE */}

      {gameStatus === "clubChoice" && (
        <Club
          key={selectedNationality.key}
          FONT_MAIN={FONT_MAIN}
          FONT_BODY={FONT_BODY}
          nationality={selectedNationality.name}
          handleClubSelection={handleClubSelection}
          selectedClub={selectedClub}
        />
      )}

      {/* START GAME BUTTON */}

      {gameStatus === "clubChoice" && selectedClub !== null && (
        <button
          onClick={() =>
            handleGameStart(selectedPosition, selectedNationality, selectedClub)
          }
          className="
            bg-green-600
            hover:bg-green-500
            text-white
            font-semibold
            py-2
            px-4
            rounded-lg
            transition
            cursor-pointer
          "
        >
          Start Game
        </button>
      )}

      {/* GAME */}

      {gameStatus === "game" && (
        <div className="text-white text-center mt-10">
          <h1 style={{ fontFamily: FONT_MAIN }} className="text-4xl font-bold">
            Game Started
          </h1>

          {/* PLAYER INFO */}

          <div style={{ fontFamily: FONT_BODY }} className="mt-5">
            <p>Position: {player.position}</p>

            <p>Nationality: {player.nationality}</p>

            <p>Club: {player.club}</p>
          </div>

          {/* ATTRIBUTES */}

          <div style={{ fontFamily: FONT_BODY }} className="mt-8">
            <p>Overall: {player.overall}</p>

            <h2
              style={{ fontFamily: FONT_MAIN }}
              className="text-2xl font-bold mb-4"
            >
              Attributes
            </h2>

            <p>Shooting: {player.attributes.shooting}</p>

            <p>Passing: {player.attributes.passing}</p>

            <p>Dribbling: {player.attributes.drybling}</p>

            <p>Defending: {player.attributes.defending}</p>

            <p>Physical: {player.attributes.physical}</p>

            <p>Pace: {player.attributes.pace}</p>

            <p>Goalkeeping: {player.attributes.goalkeeping}</p>
          </div>

          {/* STATS */}

          <div style={{ fontFamily: FONT_BODY }} className="mt-8">
            <h2
              style={{ fontFamily: FONT_MAIN }}
              className="text-2xl font-bold mb-4"
            >
              Career Stats
            </h2>

            <p>Appearances: {player.stats.appearances}</p>

            <p>Goals: {player.stats.goals}</p>

            <p>Assists: {player.stats.assists}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
