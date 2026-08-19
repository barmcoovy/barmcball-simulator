import "./App.css";
import PositionCard from "./components/PositionCard";
import NationalityCard from "./components/NationalityCard";
import { useState } from "react";
import PlayerName from "./components/PlayerName";
import Setup from "./components/Setup";
import Club from "./components/Club";
function App() {
  const FONT_MAIN = "'Oswald', sans-serif";
  const FONT_BODY = "'Inter', sans-serif";
  const FONT_MONO = "'JetBrains Mono', monospace";
  const [player, setPlayer] = useState({
    position: "",
    nationality: "",
    attributes: {
      attacking: 0,
      passing: 0,
      drybling: 0,
      defending: 0,
      physical: 0,
      goalkeeping: 0,
    },
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
  const handleNationalityClick = (nationalityName, nationalityKey) => {
    setSelectedNationality({ name: nationalityName, key: nationalityKey });
    console.log(`Selected nationality: ${nationalityName}`);
  };

  const handlePositionClick = (positionName, positionKey) => {
    setSelectedPosition({ name: positionName, key: positionKey });
    console.log(`Selected position: ${positionName}`);
  };
  const handleGameStatus = (newStatus) => {
    setGameStatus(newStatus);
  };
  return (
    <section className="flex flex-col items-center  min-h-screen bg-linear-to-b from-green-900 to-black">
      {gameStatus === "setup" && (
        <>
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
        </>
      )}
      {gameStatus === "clubChoice" && (
        <Club
          FONT_MAIN={FONT_MAIN}
          FONT_BODY={FONT_BODY}
          nationality={selectedNationality.name}
        />
      )}
    </section>
  );
}

export default App;
