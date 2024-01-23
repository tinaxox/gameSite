"use client";
import { useState } from "react";
import { ArrowIcon, SearchIcon, SmallArrow } from "./Icons";
import { Case, User, Weapon } from "../Types";
import { url } from "inspector";
import useWindowSize from "../hooks/useWindowSize";

interface WeaponsAndRewardsProps {
  user: User;
}

export function WeaponsAndRewards({ user }: WeaponsAndRewardsProps) {
  const [weaponIndex, setWeaponIndex] = useState(0);
  const [caseIndex, setCaseIndex] = useState(0);
  const [weapons, setWeapons] = useState<Weapon[]>([
    { name: "M4A4-S", image: "/m4a1s.png", price: 53, availability: 4 },
    { name: "Deagle", image: "/deagle.png", price: 53, availability: 4 },
    { name: "AK-47", image: "/ak47.png", price: 53, availability: 4 },
    { name: "USP-S", image: "/usp.png", price: 53, availability: 4 },
    { name: "M4A4-S", image: "/m4a1s.png", price: 53, availability: 4 },
    { name: "Deagle", image: "/deagle.png", price: 53, availability: 4 },
    { name: "AK-47", image: "/ak47.png", price: 53, availability: 4 },
  ]);
  const [cases, setCases] = useState<Case[]>([
    { name: "M4A4-S", image: "/case1.png", price: 53, availability: 4 },
    { name: "Deagle", image: "/case2.png", price: 53, availability: 4 },
    { name: "AK-47", image: "/case3.png", price: 53, availability: 4 },
    { name: "M4A4-S", image: "/case1.png", price: 53, availability: 4 },
    { name: "Deagle", image: "/case2.png", price: 53, availability: 4 },
    { name: "M4A4-S", image: "/case1.png", price: 53, availability: 4 },
    { name: "AK-47", image: "/case3.png", price: 53, availability: 4 },
  ]);
  const colors: string[] = [
    "#FF0000",
    "#FF00FF",
    "#00FF00",
    "#FFFF00",
    "#0000FF",
    "#00FFFF",
  ];
  const nextWeapon = () => {
    setWeaponIndex((prev) => {
      if (prev === weapons.length || prev <= 0) return prev;
      return prev - 1;
    });
  };
  const lastWeapon = () => {
    setWeaponIndex((prev) => {
      if (
        prev === weapons.length ||
        prev > weapons.length ||
        weaponIndex + 6 === weapons.length
      )
        return prev;
      return prev + 1;
    });
  };
  const nextCase = () => {
    setCaseIndex((prev) => {
      if (prev === cases.length || prev <= 0) return prev;
      return prev - 1;
    });
  };
  const lastCase = () => {
    setCaseIndex((prev) => {
      if (
        prev === cases.length ||
        prev > cases.length ||
        caseIndex + 6 === cases.length
      )
        return prev;
      return prev + 1;
    });
  };

  const windowSize = useWindowSize();
  console.log(windowSize.width, windowSize.height);

  return (
    <div className="flex flex-col  justify-center items-center py-4">
      <div className="flex gap-2 px-3 h-[40px] w-full">
        <div className="flex w-full relative ">
          <input
            className=" align-middle w-full pl-12 rounded-xl bg-zinc-900 text-neutral-400"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="absolute stroke-neutral-300 stroke-2 w-5 h-5  inset-y-2.5 left-4 opacity-20" />
        </div>
        <div className="flex gap-2 whitespace-nowrap">
          <div className="flex py-2 rounded-xl bg-zinc-900 min-w-max px-4 gap-3 text-white hover:text-rose-700">
            <img src="/bitcoin.png" className="w-6 h-6" />
            <p className=" sm:hidden md:block lg:block text-red-600">
              {user.bitcoinAmount} BTC
            </p>
          </div>
          <button className="text-white bg-gradient-to-br from-orange-600 to-yellow-500  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300">
            + Deposit
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex items-center justify-center md:justify-start mt-5  ">
          <div className="flex">
            <button
              onClick={nextWeapon}
              className="text-neutral-500 hover:text-neutral-400"
            >
              <SmallArrow className="w-7 h-7 stroke-2" />
            </button>
            <div className="flex gap-3 ">
              {weapons.map((weapon, index) => {
                if (
                  index >= weaponIndex &&
                  index <=
                    weaponIndex +
                      (windowSize.width >= 900
                        ? 4
                        : windowSize.width < 900 && windowSize.width >= 700
                        ? 3
                        : 1)
                ) {
                  console.log("weapon index", weaponIndex);
                  return (
                    <div
                      key={weapon.name + index}
                      style={{
                        boxShadow: `0px -45px 40px -40px inset ${
                          colors[index % colors.length]
                        }`,
                      }}
                      className="p-4 bg-zinc-900 rounded-xl flex items-center justify-center  shadow-green-500 hover:bg-zinc-800"
                    >
                      <p className="text-white">
                        {/* {colors[index]} {index} */}
                      </p>
                      <img src={weapon.image} className="w-[150px]" />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <button
              onClick={lastWeapon}
              className="text-neutral-500 hover:text-neutral-400"
            >
              <SmallArrow className="w-7 h-7 stroke-2 rotate-180" />
            </button>
          </div>
          <img />
        </div>
        <div className="flex flex-col justify-center items-center w-[85%] md:w-full ">
          <div
            id="firstDiv"
            className="p-8 rounded-xl md:w-full mt-6 py-10"
            // style={{ backgroundImage: "/1picture.png" }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-2xl md:text-3xl font-extrabold">
                Deposit and get up to 109% + 299 FS
              </h1>
              <p className="text-sm text-zinc-300 font-medium mb-8">
                Get bonus for every deposit you make
              </p>
            </div>
            <button className="text-white bg-gradient-to-br from-orange-600 to-yellow-500  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300">
              Get bonus now
            </button>
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <div
              id="secondDiv"
              className="p-8 rounded-xl mt-6 py-10 md:w-[50%] w-full "
              // style={{ backgroundImage: "/1picture.png" }}
            >
              <div className="flex flex-col md:w-[50%] w-[80%] gap-4">
                <h1 className="text-white text-2xl md:text-3xl font-extrabold">
                  JOIN CSGO CASINO NOW
                </h1>
                <p className="text-sm text-zinc-300 font-medium mb-8">
                  Join us today to get best deals and bonuses
                </p>
              </div>
              <button className="align-bottom text-neutral-400 bg-zinc-800  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300 hover:text-white">
                <SmallArrow className="w-5 h-5 stroke-2 rotate-180" />
              </button>
            </div>
            <div
              id="thirdDiv"
              className="p-8 rounded-xl mt-6 py-10 md:w-[50%] w-full"
              // style={{ backgroundImage: "/1picture.png" }}
            >
              <div className="flex flex-col md:w-[50%] w-[80%] gap-4">
                <h1 className="text-white text-2xl md:text-3xl font-extrabold">
                  DAILY REWARDS
                </h1>
                <p className="text-sm text-zinc-300 font-medium mb-8">
                  Explore all our rewards. Claim cases & earn cashback on your
                  bets daily.
                </p>
              </div>
              <button className="align-bottom text-neutral-400 bg-zinc-800  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300 hover:text-white">
                <SmallArrow className="w-5 h-5  stroke-2 rotate-180" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-center">
          <button
            onClick={nextCase}
            className="text-neutral-500 hover:text-neutral-400"
          >
            <SmallArrow className="w-7 h-7 stroke-2 " />
          </button>

          <div className="flex gap-3">
            {cases.map((c, index) => {
              if (
                index >= caseIndex &&
                index <=
                  caseIndex +
                    (windowSize.width >= 900
                      ? 4
                      : windowSize.width < 900 && windowSize.width >= 700
                      ? 3
                      : 1)
              ) {
                return (
                  <div
                    key={c.name + index}
                    style={{
                      boxShadow: `0px -45px 40px -40px inset ${
                        colors[index % colors.length]
                      }`,
                    }}
                    className="p-4 bg-zinc-900 rounded-xl flex items-center justify-center  shadow-green-500 hover:bg-zinc-800"
                  >
                    <p className="text-white">
                      {/* {colors[index]} {index} */}
                    </p>
                    <img src={c.image} className="w-[150px]" />
                  </div>
                );
              }
              return null;
            })}
          </div>
          <button
            onClick={lastCase}
            className="text-neutral-500 hover:text-neutral-400"
          >
            <SmallArrow className="w-7 h-7 stroke-2  rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
