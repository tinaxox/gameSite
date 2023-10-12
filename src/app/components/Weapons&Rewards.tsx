"use client";
import { useState } from "react";
import { ArrowIcon, SearchIcon, SmallArrow } from "./Icons";
import { Case, User, Weapon } from "../Types";
import { url } from "inspector";

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
      if (
        prev === weapons.length ||
        prev > weapons.length ||
        weaponIndex + 6 === weapons.length
      )
        return prev;
      return prev + 1;
    });
  };
  const lastWeapon = () => {
    setWeaponIndex((prev) => {
      if (prev === weapons.length || prev <= 0) return prev;
      return prev - 1;
    });
  };
  const nextCase = () => {
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
  const lastCase = () => {
    setCaseIndex((prev) => {
      if (prev === cases.length || prev <= 0) return prev;
      return prev - 1;
    });
  };
  return (
    <div className="flex flex-col w-[62%]">
      <div className="flex gap-5 h-[40px] mt-8 w-full">
        <div className="flex w-full relative ">
          <input
            className="pl-8 align-middle p-2 rounded-xl bg-zinc-900 w-full"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="absolute stroke-neutral-300 stroke-2 w-5 h-5  inset-y-2.5 inset-x-2 opacity-20" />
        </div>
        <div className="flex gap-2 whitespace-nowrap">
          <div className="flex py-2 rounded-xl bg-zinc-900 min-w-max px-4 gap-3 text-white hover:text-rose-700">
            <img src="/bitcoin.png" className="w-6 h-6" />
            <p className="">{user.bitcoinAmount} BTC</p>
          </div>
          <button className="text-white bg-gradient-to-br from-orange-600 to-yellow-500  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300">
            + Deposit
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 ">
        <div className="flex gap-3 relative">
          <button
            onClick={nextWeapon}
            className=" absolute inset-y-0 -right-[25px]"
          >
            <SmallArrow className="w-7 h-7 stroke-2 stroke-zinc-500 rotate-180 " />
          </button>
          <button
            onClick={lastWeapon}
            className="absolute inset-y-0 -left-[25px]"
          >
            <SmallArrow className="w-7 h-7 stroke-2 stroke-zinc-500" />
          </button>
          {weapons.map((weapon, index) => {
            if (index >= weaponIndex && index <= weaponIndex + 5) {
              console.log(index, weaponIndex);
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
                  <p className="text-white">{/* {colors[index]} {index} */}</p>
                  <img src={weapon.image} className="w-[150px]" />
                </div>
              );
            }
            return null;
          })}
        </div>
        <img />
      </div>
      <div className="flex flex-col">
        <div
          id="firstDiv"
          className="p-8 rounded-xl mt-6 w-full py-10"
          // style={{ backgroundImage: "/1picture.png" }}
        >
          <div className="flex flex-col w-[27%] gap-4">
            <h1 className="text-white text-3xl font-extrabold">
              Deposit and get up to 109% + 299 FS
            </h1>
            <p className="text-sm text-zinc-500 font-medium mb-8">
              Get bonus for every deposit you make
            </p>
          </div>
          <button className="text-white bg-gradient-to-br from-orange-600 to-yellow-500  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300">
            Get bonus now
          </button>
        </div>
        <div className="flex gap-4">
          <div
            id="secondDiv"
            className="p-8 rounded-xl mt-6 w-full py-10 "
            // style={{ backgroundImage: "/1picture.png" }}
          >
            <div className="flex flex-col w-[40%] gap-4">
              <h1 className="text-white text-3xl font-extrabold">
                JOIN CSGO CASINO NOW
              </h1>
              <p className="text-sm text-zinc-500 font-medium mb-8">
                Join us today to get best deals and bonuses
              </p>
            </div>
            <button className="align-bottom text-white bg-zinc-800  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300">
              <SmallArrow className="w-5 h-5 stroke-neutral-400 hover:stroke-neutral-100 stroke-2 rotate-180" />
            </button>
          </div>
          <div
            id="thirdDiv"
            className="p-8 rounded-xl mt-6 w-full py-10"
            // style={{ backgroundImage: "/1picture.png" }}
          >
            <div className="flex flex-col w-[40%] gap-4">
              <h1 className="text-white text-3xl font-extrabold">
                DAILY REWARDS
              </h1>
              <p className="text-sm text-zinc-500 font-medium mb-8">
                Explore all our rewards. Claim cases & earn cashback on your
                bets daily.
              </p>
            </div>
            <button className="align-bottom text-white bg-zinc-800  px-6 py-2 rounded-xl font-semibold hover:bg-gradient-to-br hover:from-orange-600 hover:to-yellow-300">
              <SmallArrow className="w-5 h-5 stroke-neutral-400 hover:stroke-neutral-100 stroke-2 rotate-180" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 relative mt-5 justify-center">
        <button
          onClick={nextWeapon}
          className=" absolute inset-y-0 -right-[25px]"
        >
          <SmallArrow className="w-7 h-7 stroke-2 stroke-zinc-500 rotate-180 " />
        </button>
        <button
          onClick={lastWeapon}
          className="absolute inset-y-0 -left-[25px]"
        >
          <SmallArrow className="w-7 h-7 stroke-2 stroke-zinc-500 " />
        </button>
        {cases.map((c, index) => {
          if (index >= caseIndex && index <= caseIndex + 5) {
            console.log(index, caseIndex);
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
                <p className="text-white">{/* {colors[index]} {index} */}</p>
                <img src={c.image} className="w-[150px]" />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
