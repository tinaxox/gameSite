import { Menu } from "./components/Menu";
import { WeaponsAndRewards } from "./components/Weapons&Rewards";
import { ProfileActivity } from "./components/ProfileActivity";

export default function Home() {
  const user = {
    username: "viper_vixen",
    balance: 49700,
    notifications: 10,
    bitcoinAmount: 0.08472486293,
  };
  return (
    <main className="flex black justify-center">
      <Menu />
      <WeaponsAndRewards user={user} />
      <ProfileActivity user={user} />
    </main>
  );
}
