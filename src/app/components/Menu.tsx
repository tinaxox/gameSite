"use client";
import { useState } from "react";
import { ArrowIcon, GiftIcon, MenuIcon, SupportIcon } from "./Icons";
import { Activity } from "../Types";
import { DropDownLanguage } from "./DropDownLanguage";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const socialNetworks: string[] = [
  "/instagram.png",
  "/twitter.png",
  "/youtube.png",
  "/tiktok.png",
  "/discord.png",
];
interface MenuContainerProps {
  className?: string;
}
export function MenuContainer({ className }: MenuContainerProps) {
  const [menuActive, setMenuActive] = useState(false);

  const openMenu = () => {
    setMenuActive(true);
  };
  const closeMenu = () => {
    setMenuActive(false);
  };
  return (
    <>
      <AnimatePresence>
        {menuActive && <Menu closeMenu={closeMenu} />}
      </AnimatePresence>
      {!menuActive && (
        <button
          onClick={openMenu}
          className={` ${className} px-1.5 py-1.5 lg:hidden bottom-2 left-3 fixed hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl justify-center items-center`}
        >
          <MenuIcon className="w-7 h-7 stroke-white stroke-2" />
        </button>
      )}
    </>
  );
}

interface MenuProps {
  className?: string;
  closeMenu?: () => void;
}
export function Menu({ closeMenu, className }: MenuProps) {
  const [activities, setActivities] = useState<Activity[]>([
    { name: "Mini Games", image: "/controller.png", hot: false },
    { name: "Casino", image: "/slotmachine.png", hot: false },
    { name: "Sports", image: "/softball.png", hot: true },
    { name: "E-Sports", image: "/basketball.png", hot: false },
    { name: "Aviator", image: "/plane.png", hot: false },
    { name: "Mines", image: "/bomb.png", hot: false },
  ]);
  const [menuActive, setMenuActive] = useState(false);
  const options: { name: string; image: string }[] = [
    { name: "Free to play", image: "/gift.png" },
    { name: "Affiliates", image: "bag.png" },
    { name: "VIP Levels", image: "star.png" },
    { name: "FAQ", image: "/faq.png" },
  ];

  return (
    <motion.div
      initial={{ translateX: "-20%" }}
      animate={{ translateX: "0%" }}
      exit={{ translateX: "-100%" }}
      transition={{ bounce: 0 }}
      className={`${className} lg:w-[20vw] sm:w-full md:w-[50vw] lg-[30vw] h-screen z-30 fixed top-0 left-0`}
    >
      <div className="  bg-zinc-900 lg:w-[20vw] sm:w-full md:w-[30vw] lg:mr-5 h-screen  ">
        <div className="px-4 flex flex-col gap-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-white font-extrabold text-3xl">CSGO</h1>
            <button
              onClick={closeMenu}
              className="lg:hidden p-2 bg-zinc-800 rounded-full text-neutral-500 hover:text-neutral-400"
            >
              <ArrowIcon className="w-5 h-5  stroke-2" />
            </button>
          </div>
          <button className="flex gap-3 bg-gradient-to-br from-orange-700 to-yellow-600 hover:bg-gradient-to-br hover:from-orange-700 hover:to-yellow-400 text-white rounded-xl py-3  justify-center font-medium">
            <GiftIcon className="w-6 h-6" />
            Daily Rewards
          </button>
          <div className="grid grid-cols-3 gap-3">
            {activities.map((activity) => (
              <button
                className="flex flex-col justify-center text-zinc-400 items-center px-3 py-1 bg-zinc-800 rounded-xl hover:bg-zinc-700 hover:text-zinc-100 relative "
                key={activity.name}
              >
                <img src={activity.image} className="w-10 h-10" />
                <p className=" text-xs font-semibold">{activity.name}</p>
                {activity.hot && (
                  <div className="rounded-bl-xl rounded-tr-xl bg-red-500 text-white align-middle absolute px-2 py-0.5 text-xs top-0 right-0">
                    Hot
                  </div>
                )}
              </button>
            ))}
          </div>
          <ul className="flex flex-col items-start gap-3 mt-2">
            {options.map((option) => (
              <li
                className="gap-5 flex justify-center items-center text-zinc-400  cursor-pointer hover:text-white"
                key={option.name}
              >
                <img src={option.image} className="w-9 h-9" />
                <p className=" whitespace-nowrap font-semibold">
                  {option.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col mt-3 gap-2 px-4 mb-5">
          <DropDownLanguage classname="p-2" mainMenu={true} />
          <button className="flex items-center gap-5  bg-zinc-800 rounded-xl pl-4 pr-5 py-1 whitespace-nowrap hover:bg-lime-600">
            <SupportIcon className="w-8 h-8 stroke-zinc-300" />
            <p className="text-zinc-300 font-semibold ">Live Support</p>
          </button>
        </div>
        <ul className="flex gap-2 items-center w-full justify-center mt-auto mb-5 px-2">
          {socialNetworks.map((socialNetwork) => (
            <li
              key={socialNetwork}
              className="p-1 rounded-xl bg-zinc-800 hover:bg-gradient-to-br hover:from-orange-700 hover:to-yellow-400 cursor-pointer"
            >
              <img src={socialNetwork} className="w-9 h-9" />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
