"use client";
import { motion } from "framer-motion";
export function SideMenu() {
  return (
    <div className="flex gap-3 fixed bottom-2 right-3">
      <button className=" hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl  justify-center ">
        <img src="/person.png" className="  w-10 h-10  " />
      </button>
      <button className="px-1.5 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl justify-center items-center">
        <img src="/chatRoom.png" className="  w-7 h-7  " />
      </button>
    </div>
  );
}
