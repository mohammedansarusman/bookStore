import Link from "next/link";
import { BookIcon } from "lucide-react";
export const Logo = () => {
  return (
    <div className="z-10 h-20 flex flex-col items-center justify-center">
        <div className="w-full">
          <p className="text-white text-6xl font-extralight">Wisdom Books</p>
        </div>
        <Link href={"/store"}>
          <div className="w-full bg-purple-500 hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center cursor-pointer rounded-tl-xl">
            <p className="text-white font-light text-2xl p-4">Take me to the store</p>
          </div>
        </Link>
      </div>
  )
}
