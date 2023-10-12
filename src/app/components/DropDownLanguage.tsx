"use client";

import { MouseEvent, useState } from "react";
import { ArrowIcon, SmallArrow } from "./Icons";

const languages: { name: string; image: string }[] = [
  { name: "English", image: "/english.png" },
  { name: "French", image: "/french.png" },
  { name: "German", image: "/german.png" },
  { name: "Italian", image: "/italian.png" },
  { name: "Turkish", image: "/turkish.png" },
];

interface DropDownLanguageProps {
  mainMenu: boolean;
  classname: string;
}

export function DropDownLanguage({
  mainMenu,
  classname,
}: DropDownLanguageProps) {
  const [language, setLanguage] = useState<{ name: string; image: string }>(
    languages[0]
  );
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuActive = () => {
    setMenuActive((prev) => !prev);
  };
  const handleLanguageChoice = (e: MouseEvent) => {
    setLanguage(
      languages.filter((l) => l.name === e.currentTarget.textContent)[0]
    );
    setMenuActive((prev) => !prev);
  };
  return (
    <div className="flex flex-col relative">
      <button
        onClick={toggleMenuActive}
        className={`flex items-center gap-5  bg-zinc-800 ${
          menuActive ? "rounded-t-xl" : "rounded-xl"
        } ${
          mainMenu ? "pl-4 pr-2 py-1" : "p-2 pl-3"
        } justify-center  whitespace-nowrap hover:bg-zinc-700 ${classname}`}
      >
        {mainMenu && <img src={language.image} className="w-8 h-8" />}
        <div className={`flex justify-between w-full items-center`}>
          <p className={`text-zinc-300 font-semibold`}>
            {mainMenu ? language.name : language.name.slice(0, 3).toUpperCase()}
          </p>
          <SmallArrow
            className={`-rotate-90 ${
              mainMenu ? "w-6 h-6" : "w-5 h-5 ml-2"
            } stroke-2 stroke-zinc-500`}
          />
        </div>
      </button>
      {menuActive && (
        <ul className="gap-1 flex flex-col bg-zinc-700 rounded-b-lg absolute w-full top-[100%] items-center">
          {languages.map((lang) => (
            <li className="flex w-full">
              <button
                onClick={handleLanguageChoice}
                className={`${
                  mainMenu ? "pl-4 py-1 pr-2 " : "pl-2"
                } flex items-center gap-5  w-full whitespace-nowrap opacity-75 hover:opacity-100 hover:bg-blue-900`}
              >
                {mainMenu && <img src={lang.image} className="w-8 h-8" />}
                <p className="text-zinc-200 font-semibold">{lang.name}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
