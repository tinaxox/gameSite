import { User } from "../Types";
import { SearchIcon } from "./Icons";

interface NavBarProps {
  user: User;
}
export function NavBar({ user }: NavBarProps) {
  return (
    <div className="flex gap-5 px-3 h-[40px] lg:mt-8 w-full">
      <div className="flex w-full relative ">
        <input
          className="sm:hidden align-middle w-full pl-12 rounded-xl bg-zinc-900 text-neutral-400"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="absolute stroke-neutral-300 stroke-2 w-5 h-5  inset-y-2.5 left-4 opacity-20" />
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
  );
}
