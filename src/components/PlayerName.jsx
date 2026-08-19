import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const PlayerName = () => {
  return (
    <>
      <section className="w-[15%] text-white border-2 border-white rounded-xl p-4 mt-12 shadow-2xl grid gap-2 grid-cols-3">
        <i></i>
        <input
          className="bg-transparent  placeholder:text-white"
          type="text"
          placeholder="Enter your name"
        />
        <span>
          <FontAwesomeIcon icon={faShuffle} />
        </span>
      </section>
    </>
  );
};

export default PlayerName;
