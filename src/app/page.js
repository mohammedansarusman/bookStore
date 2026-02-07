import Image from "next/image";
import { Logo } from "./components/sidebar/Logo";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center pt-10">
      <Image
        alt="home-page"
        src="/home/homePageBg.jpg"
        fill
        className="w-full object-cover blur-xs"
      />
      <Logo />
    </div>
  );
}
