"use client";
import { useState } from "react";
import { User } from "../Types";
import { ArrowIcon, NotificationsIcon, PersonIcon } from "./Icons";
import { DropDownLanguage } from "./DropDownLanguage";

interface ProfileActivityProps {
  user: User;
}

export function ProfileActivity({ user }: ProfileActivityProps) {
  const [messages, setMessages] = useState<
    { user: string; pfp: string; message: string; time: string }[]
  >([
    {
      user: "William",
      pfp: "man1.jpg",
      message: "i go sleep",
      time: "7:53 AM",
    },
    {
      user: "shaggy",
      pfp: "/woman2.jpg",
      message: "With so amazing price",
      time: "7:53 AM",
    },
    {
      user: "SMASHING",
      pfp: "/man3.jpg",
      message: "hi everybody",
      time: "7:53 AM",
    },
    {
      user: "Chilllpizdr1k",
      pfp: "/man4.jpg",
      message: "does someone need a promo?",
      time: "7:53 AM",
    },
    {
      user: "Dreadzz",
      pfp: "/woman1.jpg",
      message: "withdrawal works?",
      time: "7:53 AM",
    },
    {
      user: "viper_vixen",
      pfp: "/pfp.jpg",
      message: "yes it works, just wait dude",
      time: "7:53 AM",
    },
    {
      user: "Dreadzz",
      pfp: "/woman1.jpg",
      message: "ok thx m8",
      time: "7:53 AM",
    },
    {
      user: "shaggy",
      pfp: "/woman2.jpg",
      message: "thankss",
      time: "7:53 AM",
    },
  ]);

  const [numberOfPeople, setNumberOfPeople] = useState(128);
  return (
    <div className="flex flex-col bg-zinc-900 w-[19%] ml-5 px-8 relative gap-10 h-screen ">
      <div className="flex flex-col mt-5">
        <div className="flex items-center ">
          <img src="/pfp.jpg" className="rounded-full w-14 h-14" />
          <div className="flex flex-col gap-1 ml-3">
            <p className=" text-white font-semibold cursor-pointer ">
              {user.username}
            </p>
            <p className="text-white text-sm font-medium">
              <span className="text-sm text-zinc-600 font-semibold mr-1">
                Balance:
              </span>
              ${user.balance}
            </p>
          </div>
          <button className="bg-zinc-800 p-2 rounded-xl ml-5 min-w-max">
            <img src="/message.png" className="w-6 h-6" />
          </button>
          <button className="bg-zinc-800 p-2 rounded-xl  ml-3 relative">
            <NotificationsIcon className="w-6 h-6 stroke-white" />
            <div className=" text-xs absolute bg-red-500 text-white rounded-full px-1 py-0.5 flex justify-center items-center -top-2 -right-2">
              {user.notifications > 9 ? "9+" : user.notifications}
            </div>
          </button>
        </div>
        <div className="border-b-[2px] border-b-zinc-600 border-opacity-20 w-full absolute inset-x-0 top-24"></div>
      </div>
      <div className="flex gap-3 w-full justify-center">
        <button className="rounded-2xl p-2 bg-zinc-800 flex gap-2">
          <PersonIcon className="w-6 h-6 stroke-zinc-400 stroke-2 hover:stroke-pink-700" />
          <p className="text-white font-semibold">{numberOfPeople}</p>
        </button>
        <div className="flex justify-between w-full items-center">
          <DropDownLanguage classname="" mainMenu={false} />
          <button className="p-2 bg-zinc-800 rounded-full">
            <ArrowIcon className="w-5 h-5 stroke-neutral-400 hover:stroke-neutral-100 stroke-2 rotate-180" />
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-4 overflow-y-scroll">
        {messages.map((message) => (
          <li
            key={message.message}
            className="px-4 py-3 rounded-xl bg-zinc-800 flex justify-between"
          >
            <div className="flex gap-4">
              <div
                style={{
                  backgroundColor: "blue",
                  backgroundImage: `url(${message.pfp})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-[50px] h-[50px] bg-red-400 aspect-square rounded-[50%]"
              ></div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-zinc-500 cursor-pointer font-semibold">
                  {message.user}
                </p>
                <p className="text-sm text-zinc-200">{message.message}</p>
              </div>
            </div>
            <p className="text-xs text-zinc-500 whitespace-nowrap">
              {message.time}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-between mt-auto mb-5">
        <input
          type="text"
          placeholder="Write your message..."
          className="px-2 py-1 rounded-xl bg-zinc-900 w-[80%] font-medium"
        />
        <button className="p-2 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full ">
          <ArrowIcon className="w-5 h-5 stroke-neutral-100 stroke-2 rotate-90" />
        </button>
      </div>
    </div>
  );
}
