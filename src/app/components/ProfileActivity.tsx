"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChangeEvent,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { User } from "../Types";
import { ArrowIcon, NotificationsIcon, PersonIcon } from "./Icons";
import { DropDownLanguage } from "./DropDownLanguage";
import Image from "next/image";

interface ProfileActivityProps {
  user: User;
  closeMenu: () => void;
}

interface SideMenuProps {
  user: User;
}

export function SideMenu({ user }: SideMenuProps) {
  const [chatActive, setChatActive] = useState(false);

  const handleChatActive = () => {
    setChatActive(true);
  };
  const closeChat = () => {
    setChatActive(false);
  };
  return (
    <>
      <AnimatePresence>
        {chatActive && <ProfileActivity closeMenu={closeChat} user={user} />}
      </AnimatePresence>
      {!chatActive && (
        <button
          onClick={handleChatActive}
          className="px-1.5 py-1.5 fixed bottom-2 right-3 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl justify-center items-center"
        >
          <Image
            width={50}
            height={50}
            alt="chat"
            src="/chatRoom.png"
            className="  w-7 h-7  "
          />
        </button>
      )}
    </>
  );
}
interface IMessage {
  user: string;
  pfp: string;
  message: string;
  time: string;
}
function ProfileActivity({ user, closeMenu }: ProfileActivityProps) {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      user: "William",
      pfp: "/man1.jpg",
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
  const [newMessage, setNewMessage] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };
  const ref = useRef<HTMLDivElement>(null); // components/MessageList.tsx
  useEffect(() => {
    console.log(messages);
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const sendMessage = () => {
    const m: IMessage = {
      user: user.username,
      pfp: user.pfp,
      message: newMessage,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };
    setMessages((prev) => [...prev, m]);
  };
  return (
    <motion.div
      initial={{ translateX: "20%" }}
      animate={{ translateX: "0%" }}
      exit={{ translateX: "100%" }}
      transition={{ bounce: 0 }}
      className="lg:flex flex-col bg-zinc-900 md:w-[35%] lg:w-[25%] sm:w-full ml-5 px-4 right-0 top-0 gap-7 h-screen fixed z-30"
    >
      <div>
        <div className="flex flex-col mt-5 h-[20%]">
          <div className="flex items-center justify-between ">
            <div className="flex gap-1 items-center">
              <Image
                width={50}
                height={50}
                alt="pfp"
                src="/pfp.jpg"
                className="rounded-full w-14 h-14"
              />
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
            </div>

            <button className="bg-zinc-800 p-2 rounded-xl  ml-3 relative flex">
              <NotificationsIcon className="w-6 h-6 stroke-white" />
              <div className=" text-xs absolute bg-red-500 text-white rounded-full px-1 py-0.5 flex justify-center items-center -top-2 -right-2">
                {user.notifications > 9 ? "9+" : user.notifications}
              </div>
            </button>
          </div>
          <div className="flex gap-6 w-full justify-center mt-3 mb-4 md:mb-0">
            <button className=" flex justify-center items-center gap-1 md:gap-2">
              <PersonIcon className="w-5 h-5 stroke-zinc-400 stroke-2 hover:stroke-pink-700" />
              <p className="text-white text-sm md:text-base font-semibold">
                {numberOfPeople}
              </p>
            </button>
            <div className="flex justify-between w-full items-center">
              <DropDownLanguage classname="" mainMenu={false} />
              <button
                onClick={closeMenu}
                className="p-2 bg-zinc-800 rounded-full"
              >
                <ArrowIcon className="w-5 h-5 stroke-neutral-400 hover:stroke-neutral-100 stroke-2 rotate-180" />
              </button>
            </div>
          </div>
          {/* <div className="border-b-[2px] border-b-zinc-600 border-opacity-20 w-full absolute top-60"></div> */}
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-y-scroll h-[75%] mt-7 lg:mt-2">
        {messages.map((message) => (
          <div ref={ref} key={"div" + message.message}>
            <ChatListItem key={message.message} message={message} />
          </div>
        ))}
      </div>
      {/* <div ref={ref} /> */}
      <div className="flex w-full justify-between mt-3 md:mt-5 mb-6 md:mb-4">
        <input
          type="text"
          placeholder="Write your message..."
          className="px-2 py-1 rounded-xl bg-zinc-900 w-[80%] font-medium text-neutral-400"
          onChange={handleInput}
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full "
        >
          <ArrowIcon className="w-5 h-5 stroke-neutral-100 stroke-2 rotate-90" />
        </button>
      </div>
      {/* <SideMenu /> */}
    </motion.div>
  );
}

interface ChatListItemProps {
  message: IMessage;
}
function ChatListItem({ message }: ChatListItemProps) {
  return (
    <li className="px-4 py-3 rounded-xl bg-zinc-800 flex gap-3 ">
      <div className="min-w-[50px] flex items-center justify-center w-[50px] h-[50px] max-w-[50px] max-h-[50px] min-h-[50px] bg-red-400 overflow-hidden rounded-full ">
        <Image
          src={message.pfp}
          alt={message.user}
          width={100}
          height={100}
          className="object-cover h-full object-center"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between ">
          <p className="text-xs text-zinc-500 cursor-pointer font-semibold">
            {message.user}
          </p>
          <p className="text-xs text-zinc-500 whitespace-nowrap">
            {message.time}
          </p>
        </div>
        <p className="text-sm text-zinc-200">{message.message}</p>
      </div>
    </li>
  );
}
