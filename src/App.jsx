import "./App.css";
import PositionCard from "./components/PositionCard";
import NationalityCard from "./components/NationalityCard";
import { useState } from "react";
function App() {
  const FONT_MAIN = "'Oswald', sans-serif";
  const FONT_BODY = "'Inter', sans-serif";
  const FONT_MONO = "'JetBrains Mono', monospace";
  const [selectedPosition, setSelectedPosition] = useState({
    name: "",
    key: null,
  });
  const handlePositionClick = (positionName, positionKey) => {
    setSelectedPosition({ name: positionName, key: positionKey });
    console.log(`Selected position: ${positionName}`);
  };
  return (
    <section className="flex flex-col items-center  min-h-screen bg-linear-to-b from-green-900 to-black">
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
        <NationalityCard FONT_MAIN={FONT_MAIN} />
      ) : null}
    </section>
  );
}

export default App;
