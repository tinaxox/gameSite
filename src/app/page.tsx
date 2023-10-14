import { Menu } from "./components/Menu";
import { WeaponsAndRewards } from "./components/Weapons&Rewards";
import { SideMenu } from "./components/ProfileActivity";

export default function Home() {
  const user = {
    username: "viper_vixen",
    balance: 49700,
    notifications: 10,
    bitcoinAmount: 0.08472486293,
    pfp: "/pfp.jpg",
  };
  return (
    <main className="flex py-5 px-8 lg:p-0 ">
      <Menu />
      <WeaponsAndRewards user={user} />
      <SideMenu user={user} />
      {/* <SideMenu /> */}
    </main>
  );
}
