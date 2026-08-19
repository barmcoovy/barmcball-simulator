import React from "react";

const NationalityCard = ({
  selectedNationality,
  handleNationalityClick,
  FONT_MAIN,
}) => {
  const NATIONALITIES = [
    {
      name: "England",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
    },
    {
      name: "Germany",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    },
    {
      name: "Spain",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    },
    {
      name: "France",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      name: "Italy",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      name: "Brazil",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    },
    {
      name: "Poland",
      flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    },
    {
      name: "Portugal",
      flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    },
  ];
  return (
    <>
      h3
      <h3
        style={{ fontFamily: FONT_MAIN }}
        className="text-white text-xl font-bold mb-4"
      >
        Choose your nationality
      </h3>
      <section className="w-[30%] text-white border-2 border-white rounded-xl p-4 mt-6 shadow-2xl grid gap-2 grid-cols-2">
        {NATIONALITIES.map((nationality, key) => {
          const isSelected =
            selectedNationality?.name === nationality.name &&
            selectedNationality?.key === key;
          return (
            <div
              key={key}
              onClick={() => handleNationalityClick(nationality.name, key)}
              className={`flex items-center gap-2 cursor-pointer hover:bg-white/20 p-2 rounded-md transition-all duration-300 text-center ${isSelected ? "bg-white/20" : ""}`}
            >
              <img
                src={nationality.flag}
                alt={nationality.name}
                className="w-8 h-5 object-cover rounded-sm"
              />
              <span style={{ fontFamily: FONT_MAIN }}>{nationality.name}</span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default NationalityCard;
